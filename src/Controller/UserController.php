<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UserController extends AbstractController
{
    /**
     * @Route("/users/{email}", name="get_user")
     *
     * @return void
     */
    public function getUserByEmail($email, Request $request, UserRepository $userRepository)
    {

        $response = new JsonResponse();

        if (!$this->getUser()) {
            $response->setStatusCode(403);
            return $response;
        }

        if ('GET' === $request->getMethod()) {

            $user = $userRepository->findBy(array('email' => $email));

            try {
                $response->setData([
                    'success' => true,
                    'data' => [
                        'id' => $user[0]->getId(),
                        'displayName' => $user[0]->getDisplayName(),
                        'roles' => $user[0]->getRoles(),
                        'email' => $user[0]->getEmail()
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
}
