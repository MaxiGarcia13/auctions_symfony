<?php

namespace App\Repository;

use App\Entity\Bit;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Bit|null find($id, $lockMode = null, $lockVersion = null)
 * @method Bit|null findOneBy(array $criteria, array $orderBy = null)
 * @method Bit[]    findAll()
 * @method Bit[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BitRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Bit::class);
    }

    // /**
    //  * @return Bit[] Returns an array of Bit objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Bit
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
