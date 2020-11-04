<?php

namespace App\Controller;

use App\Repository\UserRepository;
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
    public function getCreateAuctions(Request $request)
    {

        $response = new JsonResponse();

        if (!$this->getUser()) {
            $response->setStatusCode(403);
            return $response;
        }

        if ('POST' === $request->getMethod()) {

            try {
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
}
