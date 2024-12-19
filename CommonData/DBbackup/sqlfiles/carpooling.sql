CREATE DATABASE  IF NOT EXISTS `carpooling` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `carpooling`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: carpooling
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `AddressID` int NOT NULL AUTO_INCREMENT,
  `City` varchar(255) NOT NULL,
  `State` varchar(255) NOT NULL,
  `Pincode` varchar(20) NOT NULL,
  PRIMARY KEY (`AddressID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'surat','gujarat','394210');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `BookingID` int NOT NULL AUTO_INCREMENT,
  `BookingDate` date NOT NULL,
  `RideID` int NOT NULL,
  `URID` int NOT NULL,
  PRIMARY KEY (`BookingID`),
  KEY `RideID` (`RideID`),
  KEY `URID` (`URID`),
  CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`RideID`) REFERENCES `ride` (`RideID`),
  CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`URID`) REFERENCES `user_roll` (`URID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `driver`
--

DROP TABLE IF EXISTS `driver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver` (
  `DriverID` int NOT NULL AUTO_INCREMENT,
  `DrivingLicence` varchar(255) NOT NULL,
  `Age` int NOT NULL,
  `URID` int NOT NULL,
  `VehicleInfo` varchar(255) NOT NULL,
  PRIMARY KEY (`DriverID`),
  UNIQUE KEY `DrivingLicence` (`DrivingLicence`),
  KEY `URID` (`URID`),
  CONSTRAINT `driver_ibfk_1` FOREIGN KEY (`URID`) REFERENCES `user_roll` (`URID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver`
--

LOCK TABLES `driver` WRITE;
/*!40000 ALTER TABLE `driver` DISABLE KEYS */;
/*!40000 ALTER TABLE `driver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `PaymentID` int NOT NULL AUTO_INCREMENT,
  `Amount` float NOT NULL,
  `Date` date NOT NULL,
  `BookingID` int NOT NULL,
  `Status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`PaymentID`),
  KEY `BookingID` (`BookingID`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`BookingID`) REFERENCES `booking` (`BookingID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ride`
--

DROP TABLE IF EXISTS `ride`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ride` (
  `RideID` int NOT NULL AUTO_INCREMENT,
  `URID` int NOT NULL,
  `Source` varchar(255) NOT NULL,
  `Destination` varchar(255) NOT NULL,
  `Fare` float NOT NULL,
  `NoSeat` smallint NOT NULL,
  `Date` date NOT NULL,
  PRIMARY KEY (`RideID`),
  KEY `URID` (`URID`),
  CONSTRAINT `ride_ibfk_1` FOREIGN KEY (`URID`) REFERENCES `user_roll` (`URID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ride`
--

LOCK TABLES `ride` WRITE;
/*!40000 ALTER TABLE `ride` DISABLE KEYS */;
/*!40000 ALTER TABLE `ride` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trip_history`
--

DROP TABLE IF EXISTS `trip_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trip_history` (
  `TripID` int NOT NULL AUTO_INCREMENT,
  `RideID` int NOT NULL,
  `Rating` smallint DEFAULT NULL,
  `Feedback` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`TripID`),
  KEY `RideID` (`RideID`),
  CONSTRAINT `trip_history_ibfk_1` FOREIGN KEY (`RideID`) REFERENCES `ride` (`RideID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trip_history`
--

LOCK TABLES `trip_history` WRITE;
/*!40000 ALTER TABLE `trip_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `trip_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `UID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Contactno` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `AddressID` int DEFAULT NULL,
  `Gender` varchar(6) NOT NULL,
  `DOB` date NOT NULL,
  `Password` varchar(255) NOT NULL,
  PRIMARY KEY (`UID`),
  UNIQUE KEY `Contactno` (`Contactno`),
  UNIQUE KEY `Email` (`Email`),
  KEY `AddressID` (`AddressID`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`AddressID`) REFERENCES `address` (`AddressID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'Rushikesh','9313350998','rishispatil2002@gmail.com',1,'male','2002-05-24','1215171');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roll`
--

DROP TABLE IF EXISTS `user_roll`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roll` (
  `URID` int NOT NULL AUTO_INCREMENT,
  `RID` varchar(10) NOT NULL,
  `UID` int NOT NULL,
  PRIMARY KEY (`URID`),
  KEY `UID` (`UID`),
  CONSTRAINT `user_roll_ibfk_2` FOREIGN KEY (`UID`) REFERENCES `user` (`UID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roll`
--

LOCK TABLES `user_roll` WRITE;
/*!40000 ALTER TABLE `user_roll` DISABLE KEYS */;
INSERT INTO `user_roll` VALUES (1,'1',2);
/*!40000 ALTER TABLE `user_roll` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-18 21:34:51
