-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2024 at 01:31 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onekonekcrm`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `serverConn` decimal(11,0) DEFAULT NULL,
  `accountId` decimal(15,0) NOT NULL,
  `userId` varchar(50) DEFAULT NULL,
  `currPlan` decimal(11,0) DEFAULT NULL,
  `billingDate` varchar(50) DEFAULT NULL,
  `stat` decimal(5,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `acounttype`
--

CREATE TABLE `acounttype` (
  `restrictionId` decimal(11,0) NOT NULL,
  `restrictionType` varchar(20) DEFAULT NULL,
  `position` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `acounttype`
--

INSERT INTO `acounttype` (`restrictionId`, `restrictionType`, `position`) VALUES
('25464136845', 'onr', 'Owner'),
('25464136855', 'cs', 'Customer'),
('25464136865', 'st', 'Staff'),
('99999999999', 'adn', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `username` varchar(50) NOT NULL,
  `pWord` varchar(255) NOT NULL,
  `accountId` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`username`, `pWord`, `accountId`) VALUES
('admin', '$2a$10$fhtur3P7CdE5eIAUdRu8QOHOd3ovmvBrCdSwncRWazL2uZ.0UC5Pa', '16458364951'),
('cs', '$2a$10$fhtur3P7CdE5eIAUdRu8QOHOd3ovmvBrCdSwncRWazL2uZ.0UC5Pa', '16458364911'),
('staff', '$2a$10$fhtur3P7CdE5eIAUdRu8QOHOd3ovmvBrCdSwncRWazL2uZ.0UC5Pa', '16458364981');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `paymentId` decimal(15,0) NOT NULL,
  `accountId` decimal(15,0) DEFAULT NULL,
  `cashierId` varchar(50) DEFAULT NULL,
  `rebate` decimal(20,0) DEFAULT NULL,
  `totalPaid` decimal(20,0) DEFAULT NULL,
  `plan` decimal(11,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `plans`
--

CREATE TABLE `plans` (
  `planId` decimal(11,0) NOT NULL,
  `planName` varchar(20) DEFAULT NULL,
  `planSpeed` decimal(10,0) DEFAULT NULL,
  `planPrice` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plans`
--

INSERT INTO `plans` (`planId`, `planName`, `planSpeed`, `planPrice`) VALUES
('10293312812', 'Sulit Plan', '75', '749'),
('10293312815', 'OK Plan', '100', '949'),
('10293312817', 'WOW Plan', '200', '1449'),
('10293312819', 'Panalo Plan', '300', '1949');

-- --------------------------------------------------------

--
-- Table structure for table `servers`
--

CREATE TABLE `servers` (
  `serverId` decimal(11,0) NOT NULL,
  `serverName` varchar(20) DEFAULT NULL,
  `serverLocation` varchar(50) DEFAULT NULL,
  `maxConn` decimal(10,0) DEFAULT NULL,
  `ipAdd` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `systemlogs`
--

CREATE TABLE `systemlogs` (
  `logId` decimal(30,0) NOT NULL,
  `userId` varchar(50) DEFAULT NULL,
  `timedate` date DEFAULT NULL,
  `actionTaken` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `accountId` decimal(15,0) DEFAULT NULL,
  `tickedId` decimal(11,0) NOT NULL,
  `ticketTitle` varchar(100) DEFAULT NULL,
  `ticketDescription` text DEFAULT NULL,
  `stat` decimal(2,0) DEFAULT NULL,
  `technicianId` decimal(15,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` varchar(50) NOT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `middleName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `age` decimal(5,0) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `contactNum` decimal(11,0) DEFAULT NULL,
  `address` varchar(256) DEFAULT NULL,
  `profilePic` blob DEFAULT NULL,
  `restriction` decimal(11,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `middleName`, `lastName`, `age`, `email`, `contactNum`, `address`, `profilePic`, `restriction`) VALUES
('16458364911', 'Palapat', '', 'Customer', '0', '', '0', '', '', '25464136855'),
('16458364951', 'Dharist', '', 'Coronel', '42', '', '0', '', '', '25464136845'),
('16458364981', 'Main', '', 'Staff', '0', '', '0', '', '', '25464136865');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`accountId`),
  ADD UNIQUE KEY `userId` (`userId`),
  ADD KEY `serverConn` (`serverConn`),
  ADD KEY `currPlan` (`currPlan`);

--
-- Indexes for table `acounttype`
--
ALTER TABLE `acounttype`
  ADD PRIMARY KEY (`restrictionId`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`username`),
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`paymentId`),
  ADD KEY `accountId` (`accountId`),
  ADD KEY `cashierId` (`cashierId`),
  ADD KEY `plan` (`plan`);

--
-- Indexes for table `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`planId`);

--
-- Indexes for table `servers`
--
ALTER TABLE `servers`
  ADD PRIMARY KEY (`serverId`);

--
-- Indexes for table `systemlogs`
--
ALTER TABLE `systemlogs`
  ADD PRIMARY KEY (`logId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`tickedId`),
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD KEY `fk_accountRestriction` (`restriction`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`),
  ADD CONSTRAINT `accounts_ibfk_2` FOREIGN KEY (`serverConn`) REFERENCES `servers` (`serverId`),
  ADD CONSTRAINT `accounts_ibfk_3` FOREIGN KEY (`currPlan`) REFERENCES `plans` (`planId`),
  ADD CONSTRAINT `accounts_ibfk_4` FOREIGN KEY (`currPlan`) REFERENCES `plans` (`planId`);

--
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `users` (`userId`);

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`accountId`),
  ADD CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`cashierId`) REFERENCES `users` (`userId`),
  ADD CONSTRAINT `payments_ibfk_3` FOREIGN KEY (`plan`) REFERENCES `plans` (`planId`);

--
-- Constraints for table `systemlogs`
--
ALTER TABLE `systemlogs`
  ADD CONSTRAINT `systemlogs_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`);

--
-- Constraints for table `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`accountId`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_accountRestriction` FOREIGN KEY (`restriction`) REFERENCES `acounttype` (`restrictionId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
