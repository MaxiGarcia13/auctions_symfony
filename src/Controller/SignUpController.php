<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SignUpController extends AbstractController
{

    /**
     * @Route("/sign/up", name="sign_up")
     */
    public function index(Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $error = false;

        if ('POST' === $request->getMethod()) {

            $email = $request->get('email', null);
            $password = $request->get('password', null);
            $displayName = $request->get('displayName', null);
            $roles = ['USER'];

            $user = new User();

            $user->setDisplayName($displayName);
            $user->setEmail($email);
            $user->setRoles($roles);

            $passwordEncoder = $passwordEncoder->encodePassword($user, $password);

            $user->setPassword($passwordEncoder);

            try {
                $em->persist($user);
                $em->flush();

                $request->getSession()->set(
                    Security::LAST_USERNAME,
                    $email
                );

                return $this->redirectToRoute('app_login');
            } catch (\Throwable $th) {
                $error = true;
            }
        }

        return $this->render('sign_up/index.html.twig', [
            'controller_name' => 'SignUpController',
            "error" => $error
        ]);
    }
}
