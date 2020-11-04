<?php

namespace App\Controller;

use App\Entity\Auction;
use App\Entity\Bit;
use App\Repository\AuctionRepository;
use App\Repository\BitRepository;
use App\Repository\UserRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use finfo;
use PhpParser\Node\Expr\Cast\Array_;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BitController extends AbstractController
{
    /**
     * @Route("/bid", name="create_bid")
     *
     * @return void
     */
    public function createBit(Request $request, UserRepository $userRepository, AuctionRepository $auctionRepository, EntityManagerInterface $em)
    {

        $response = new JsonResponse();

        if (!$this->getUser()) {
            $response->setStatusCode(403);
            return $response;
        }

        switch ($request->getMethod()) {
            case 'POST':
                $data = json_decode($request->getContent(), true);

                try {
                    $bid = new Bit();

                    $user = $userRepository->find($data['user_id']);
                    $auction = $auctionRepository->find($data['auction_id']);

                    $auction->setLastBid($data['bid']);

                    $bid->setUser($user);
                    $bid->setAuction($auction);
                    $bid->setValue($data['bid']);
                    $bid->setCreated(new DateTime());

                    $em->persist($auction);
                    $em->persist($bid);

                    $em->flush();

                    $response->setData([
                        'success' => true
                    ]);
                } catch (\Throwable $th) {
                    $response->setData([
                        'success' => false
                    ]);
                    $response->setStatusCode(500);
                }

                break;

            default:
                break;
        }

        return $response;
    }

    /**
     * @Route("/bid/{id}", name="delete_bid")
     *
     * @return void
     */
    public function deleteBit($id, Request $request, BitRepository $bitRepository, AuctionRepository $auctionRepository, EntityManagerInterface $em)
    {

        $response = new JsonResponse();

        if (!$this->getUser()) {
            $response->setStatusCode(403);
            return $response;
        }

        if ($request->getMethod() === "DELETE") {
            try {
                $bid = $bitRepository->find($id);

                $auction = $auctionRepository->find($bid->getAuction());

                $em->remove($bid);
                $em->flush();

                $lastBids = $bitRepository->findBy(array('auction' => $auction->getId()), array('created' => 'DESC'), 1);
                $lastBid = $lastBids && $lastBids[0] ? $lastBids[0]->getValue() : $auction->getInitialValue();

                $auction->setLastBid($lastBid);

                $em->persist($auction);


                $em->flush();
                $response->setData([
                    'success' => true
                ]);
            } catch (\Throwable $th) {
                $response->setData([
                    'success' => false
                ]);
                $response->setStatusCode(500);
                printf($th);
            }
        }


        return $response;
    }

    /**
     * @Route("/bid/users/{user_id}", name="get_bid_by_user_id")
     *
     * @return void
     */
    public function getBitByUserId($user_id, UserRepository $userRepository, AuctionRepository $auctionRepository)
    {

        $response = new JsonResponse();

        if (!$this->getUser()) {
            $response->setStatusCode(403);
            return $response;
        }

        $user = $userRepository->find($user_id);

        $bids = $user->getBits();

        $bidsArray = [];

        foreach ($bids as $bid) {

            $auction = $auctionRepository->find($bid->getAuction());

            $bidsArray[] = [
                'id' => $bid->getId(),
                'value' => $bid->getValue(),
                'auction' => [
                    'id' => $auction->getId(),
                    'name' => $auction->getName(),
                    'description' => $auction->getDescription(),
                    'picture' => $auction->getPicture(),
                    'initial_value' => $auction->getInitialValue(),
                    'last_bid' => $auction->getLastBid(),
                    'created' => $auction->getCreated()
                ]
            ];
        }

        $response->setData([
            'success' => true,
            'data' => $bidsArray
        ]);

        return $response;
    }
}
