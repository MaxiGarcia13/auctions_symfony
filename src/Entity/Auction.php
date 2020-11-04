<?php

namespace App\Entity;

use App\Repository\AuctionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AuctionRepository::class)
 */
class Auction
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $picture;

    /**
     * @ORM\Column(type="float")
     */
    private $initial_value;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created;

    /**
     * @ORM\Column(type="float")
     */
    private $last_bid;

    /**
     * @ORM\OneToMany(targetEntity=Bit::class, mappedBy="auction")
     */
    private $bits;

    public function __construct()
    {
        $this->bits = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getInitialValue(): ?float
    {
        return $this->initial_value;
    }

    public function setInitialValue(float $initial_value): self
    {
        $this->initial_value = $initial_value;

        return $this;
    }

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(\DateTimeInterface $created): self
    {
        $this->created = $created;

        return $this;
    }

    public function getLastBid(): ?float
    {
        return $this->last_bid;
    }

    public function setLastBid(float $last_bid): self
    {
        $this->last_bid = $last_bid;

        return $this;
    }

    /**
     * @return Collection|Bit[]
     */
    public function getBits(): Collection
    {
        return $this->bits;
    }

    public function addBit(Bit $bit): self
    {
        if (!$this->bits->contains($bit)) {
            $this->bits[] = $bit;
            $bit->setAuction($this);
        }

        return $this;
    }

    public function removeBit(Bit $bit): self
    {
        if ($this->bits->removeElement($bit)) {
            // set the owning side to null (unless already changed)
            if ($bit->getAuction() === $this) {
                $bit->setAuction(null);
            }
        }

        return $this;
    }
}
