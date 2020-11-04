<?php

namespace App\Controller;

use App\Entity\Auction;
use App\Repository\AuctionRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AuctionController extends AbstractController
{
    /**
     * @Route("/auction/create", name="create_auction")
     *
     * @return void
     */
    public function createAuction(Request $request, EntityManagerInterface $em)
    {

        $response = new JsonResponse();

        if (!$this->getUser()) {
            $response->setStatusCode(403);
            return $response;
        }

        $data = json_decode($request->getContent(), true);

        $name = $data['name'];
        $desciption = $data['desciption'];
        $picture = $data['picture'];
        $initialValue = $data['initial_value'];

        if ('POST' === $request->getMethod()) {

            try {
                $auction = new Auction();

                $auction->setName($name);
                $auction->setDescription($desciption);
                $auction->setPicture($picture);
                $auction->setInitialValue($initialValue);
                $auction->setCreated(new DateTime());

                $em->persist($auction);
                $em->flush();

                $response->setData([
                    'success' => true,
                    'data' => [
                        [
                            'id' => $auction->getId(),
                            'name' => $auction->getName(),
                            'description' => $auction->getDescription(),
                            'picture' => $auction->getPicture(),
                            'initial_value' => $auction->getInitialValue(),
                            'created' => $auction->getCreated()
                        ]
                    ]
                ]);
            } catch (\Throwable $th) {
                $response->setData([
                    'success' => false
                ]);
                $response->setStatusCode(500);
            }
        } else {
            $response->setStatusCode(400);
        }

        return $response;
    }

    /**
     * @Route("/auction/{id}", name="auction_managment")
     *
     * @return void
     */
    public function auctionManagment($id, Request $request, AuctionRepository $auctionRepository, EntityManagerInterface $em)
    {

        $response = new JsonResponse();

        if (!$this->getUser()) {
            $response->setStatusCode(403);
            return $response;
        }

        $auction = $auctionRepository->find($id);

        switch ($request->getMethod()) {
            case 'PUT':
                try {

                    $data = json_decode($request->getContent(), true);

                    $auction->setName($data['name']);
                    $auction->setDescription($data['desciption']);
                    $auction->setPicture($data['picture']);
                    $auction->setInitialValue($data['initial_value']);

                    $em->persist($auction);
                    $em->flush();

                    $response->setData([
                        'success' => true,
                        'data' => [
                            [
                                'id' => $auction->getId(),
                                'name' => $auction->getName(),
                                'description' => $auction->getDescription(),
                                'picture' => $auction->getPicture(),
                                'initial_value' => $auction->getInitialValue(),
                                'created' => $auction->getCreated()
                            ]
                        ]
                    ]);
                } catch (\Throwable $th) {
                    $response->setData([
                        'success' => false
                    ]);
                    $response->setStatusCode(500);
                }
                break;

            case 'DELETE':
                $em->remove($auction);
                $em->flush();
                break;

            default:
                $response->setStatusCode(400);
                break;
        }

        return $response;
    }
}
