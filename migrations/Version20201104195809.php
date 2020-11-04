<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201104195809 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE auction (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, picture VARCHAR(255) DEFAULT NULL, initial_value DOUBLE PRECISION NOT NULL, created DATETIME NOT NULL, last_bid DOUBLE PRECISION NOT NULL)');
        $this->addSql('CREATE TABLE bit (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER NOT NULL, auction_id INTEGER DEFAULT NULL, value DOUBLE PRECISION NOT NULL, created DATETIME NOT NULL)');
        $this->addSql('CREATE INDEX IDX_5745A397A76ED395 ON bit (user_id)');
        $this->addSql('CREATE INDEX IDX_5745A39757B8F0DE ON bit (auction_id)');
        $this->addSql('CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles CLOB NOT NULL --(DC2Type:json)
        , password VARCHAR(255) NOT NULL, display_name VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON user (email)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE auction');
        $this->addSql('DROP TABLE bit');
        $this->addSql('DROP TABLE user');
    }
}
