-- MySQL Script generated by MySQL Workbench
-- Mon Nov 26 10:44:48 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema runmate
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema runmate
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `runmate` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `runmate` ;

-- -----------------------------------------------------
-- Table `runmate`.`grupper`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `runmate`.`grupper` (
  `gruppeid` SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`gruppeid`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `runmate`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `runmate`.`users` (
  `id` SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `navn` VARCHAR(60) NOT NULL,
  `pw` VARCHAR(26) NULL DEFAULT NULL,
  `gruppe` SMALLINT(5) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `gruppeid_idx` (`gruppe` ASC) VISIBLE,
  CONSTRAINT `gruppeid`
    FOREIGN KEY (`gruppe`)
    REFERENCES `runmate`.`grupper` (`gruppeid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `runmate`.`aktivitet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `runmate`.`aktivitet` (
  `userid` SMALLINT(5) UNSIGNED NOT NULL,
  `aktivitetstype` ENUM('lob', 'cykel', 'gang') NULL DEFAULT NULL,
  `distance` FLOAT NULL DEFAULT NULL,
  `tidspunkt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `id_idx` (`userid` ASC) VISIBLE,
  CONSTRAINT `id`
    FOREIGN KEY (`userid`)
    REFERENCES `runmate`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
