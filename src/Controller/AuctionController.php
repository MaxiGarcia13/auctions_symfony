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
     * @Route("/auction", name="create_auction")
     *
     * @return void
     */
    public function createAuction(Request $request, AuctionRepository $auctionRepository, EntityManagerInterface $em)
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
                    $auction = new Auction();

                    $auction->setName($data['name']);
                    $auction->setDescription($data['description']);
                    $auction->setPicture($data['picture']);
                    $auction->setInitialValue($data['initial_value']);
                    $auction->setLastBid($data['initial_value']);
                    $auction->setCreated(new DateTime());

                    $em->persist($auction);
                    $em->flush();

                    $response->setData([
                        'success' => true,
                        'data' => [
                            'id' => $auction->getId(),
                            'name' => $auction->getName(),
                            'description' => $auction->getDescription(),
                            'picture' => $auction->getPicture(),
                            'initial_value' => $auction->getInitialValue(),
                            'last_bid' => $auction->getLastBid(),
                            'created' => $auction->getCreated()
                        ]
                    ]);
                } catch (\Throwable $th) {
                    $response->setData([
                        'success' => false
                    ]);
                    $response->setStatusCode(500);
                }

                break;

            default:

                $queryName = $request->get('name', null);


                $auctions = $auctionRepository->findAll();

                $auctionsArray = [];

                foreach ($auctions as $auction) {
                    if (!$queryName || strpos($auction->getName(), $queryName)) {
                        $auctionsArray[] = [
                            'id' => $auction->getId(),
                            'name' => $auction->getName(),
                            'description' => $auction->getDescription(),
                            'picture' => $auction->getPicture(),
                            'initial_value' => $auction->getInitialValue(),
                            'last_bid' => $auction->getLastBid(),
                            'created' => $auction->getCreated()
                        ];
                    }
                }

                $response->setData([
                    'success' => true,
                    'data' => $auctionsArray
                ]);
                break;
        }

        return $response;
    }

    /**
     * @Route("/auction/{id}", name="auction_managment")
     *
     * @return void
     */
    public function auctionManagmentById($id, Request $request, AuctionRepository $auctionRepository, EntityManagerInterface $em)
    {

        $response = new JsonResponse();

        if (!$this->getUser()) {
            $response->setStatusCode(403);
            return $response;
        }

        $auction = $auctionRepository->find($id);

        switch ($request->getMethod()) {
            case 'GET':
                $response->setData([
                    'success' => true,
                    'data' => [
                        'id' => $auction->getId(),
                        'name' => $auction->getName(),
                        'description' => $auction->getDescription(),
                        'picture' => $auction->getPicture(),
                        'initial_value' => $auction->getInitialValue(),
                        'created' => $auction->getCreated(),
                        'last_bid' => $auction->getLastBid(),
                    ]
                ]);
                break;
            case 'PUT':
                try {

                    $data = json_decode($request->getContent(), true);

                    $auction->setName($data['name']);
                    $auction->setDescription($data['description']);
                    $auction->setPicture($data['picture']);
                    $auction->setInitialValue($data['initial_value']);

                    $em->persist($auction);
                    $em->flush();

                    $response->setData([
                        'success' => true,
                        'data' => [
                            'id' => $auction->getId(),
                            'name' => $auction->getName(),
                            'description' => $auction->getDescription(),
                            'picture' => $auction->getPicture(),
                            'initial_value' => $auction->getInitialValue(),
                            'last_bid' => $auction->getLastBid(),
                            'created' => $auction->getCreated()
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
                try {
                    $em->remove($auction);
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
                $response->setStatusCode(400);
                break;
        }

        return $response;
    }
}
