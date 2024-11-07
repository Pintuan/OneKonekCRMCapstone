-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2024 at 10:56 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET nameS utf8mb4 */;

--
-- Database: onekonekcrm
--

-- --------------------------------------------------------

--
-- Table structure for table accounts
--

CREATE TABLE accounts (
  server_conn decimal(11,0) DEFAULT NULL,
  curr_plan decimal(11,0) DEFAULT NULL,
  account_id decimal(15,0) NOT NULL,
  billing_date varchar(50) DEFAULT NULL,
  stat decimal(5,0) DEFAULT NULL,
  user_id varchar(50) DEFAULT NULL
)

--
-- Dumping data for table accounts
--

INSERT INTO accounts (server_conn, curr_plan, account_id, billing_date, stat, user_id) VALUES
('17642231212', '10293312819', '125645685432', '16', '5522', '102339512332'),
('17642231212', '10293312817', '125645685433', '16', '5522', '102339512333'),
('17642231212', '10293312815', '125645685434', '16', '5522', '102339512334'),
('17642231212', '10293312817', '125645685435', '16', '5522', '102339512335'),
('17642231212', '10293312815', '125645685436', '16', '5522', '102339512336'),
('17642231212', '10293312815', '125645685437', '16', '5522', '102339512337'),
('17642231212', '10293312812', '125645685438', '16', '5522', '102339512338'),
('17642231212', '10293312812', '655123331235123', '14', '5522', '16458364911');

-- --------------------------------------------------------

--
-- Table structure for table acounttype
--

CREATE TABLE acounttype (
  restriction_id decimal(11,0) NOT NULL,
  restriction_type varchar(20) DEFAULT NULL,
  position varchar(20) DEFAULT NULL
)

--
-- Dumping data for table acounttype
--

INSERT INTO acounttype (restriction_id, restriction_type, position) VALUES
('25464136845', 'onr', 'Owner'),
('25464136855', 'cs', 'Customer'),
('25464136865', 'st', 'Staff'),
('99999999999', 'adn', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table api
--

CREATE TABLE api (
  API_ID decimal(10,0) NOT NULL,
  API_name varchar(255) NOT NULL,
  PUBLIC_KEY varchar(255) NOT NULL,
  SECRET_KEY varchar(255) NOT NULL,
  webhook_Verification_Token varchar(255) DEFAULT NULL
)

--
-- Dumping data for table api
--

INSERT INTO api (API_ID, API_name, PUBLIC_KEY, SECRET_KEY, webhook_Verification_Token) VALUES
('126343312', 'XENDIT', 'xnd_public_development_xtSYPoJVakMfTenAfERptlREtV3qKUp8FnxcaIsTfxuOHYzL24376lSg3nsT0', 'xnd_development_c9ixerSsua5IVmOMBg3SO51OWPh0aYA7X750CM2EErCA3DygsfBGAUXxUeJlV', 'gF6hHWvCLdtCTm3StGvykVReDbw9QQQhKtvVBS7jdtmjjsPt');

-- --------------------------------------------------------

--
-- Table structure for table login
--

CREATE TABLE login (
  username varchar(50) NOT NULL,
  pass_word varchar(255) NOT NULL,
  account_id varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table login
--

INSERT INTO login (username, pass_word, account_id) VALUES
('admin', '$2a$10$fhtur3P7CdE5eIAUdRu8QOHOd3ovmvBrCdSwncRWazL2uZ.0UC5Pa', '16458364951'),
('cs', '$2a$10$fhtur3P7CdE5eIAUdRu8QOHOd3ovmvBrCdSwncRWazL2uZ.0UC5Pa', '16458364911'),
('staff', '$2a$10$fhtur3P7CdE5eIAUdRu8QOHOd3ovmvBrCdSwncRWazL2uZ.0UC5Pa', '16458364981');

-- --------------------------------------------------------

--
-- Table structure for table paymentoption
--

CREATE TABLE paymentoption (
  payment_id decimal(10,0) NOT NULL,
  payment_name varchar(50) NOT NULL,
  Payment_logo bytea DEFAULT NULL,
  api_key decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table payments
--

CREATE TABLE payments (
  payment_id decimal(15,0) NOT NULL,
  account_id decimal(15,0) DEFAULT NULL,
  cashier_id varchar(50) DEFAULT NULL,
  rebate decimal(20,0) DEFAULT NULL,
  total_paid decimal(20,0) DEFAULT NULL,
  plan decimal(11,0) DEFAULT NULL,
  payment_date date DEFAULT NULL,
  payment_type decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table payments
--

INSERT INTO payments (payment_id, account_id, cashier_id, rebate, total_paid, plan, payment_date, payment_type) VALUES
('123233132231323', '655123331235123', '16458364981', '0', '1949', '10293312819', '2024-10-01', NULL),
('533421223888775', '655123331235123', '16458364981', '0', '1949', '10293312819', '2024-10-01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table plans
--

CREATE TABLE plans (
  plan_id decimal(11,0) NOT NULL,
  plan_name varchar(20) DEFAULT NULL,
  plan_speed decimal(10,0) DEFAULT NULL,
  plan_price decimal(10,0) DEFAULT NULL,
  stat decimal(5,0) DEFAULT 16340
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table plans
--

INSERT INTO plans (plan_id, plan_name, plan_speed, plan_price, stat) VALUES
('10293312812', 'Sulit Plan', '75', '749', '16340'),
('10293312815', 'OK Plan', '100', '949', '16340'),
('10293312817', 'WOW Plan', '200', '1449', '16340'),
('10293312819', 'Panalo Plan', '300', '1949', '16340');

-- --------------------------------------------------------

--
-- Table structure for table servers
--

CREATE TABLE servers (
  server_id decimal(11,0) NOT NULL,
  server_name varchar(20) DEFAULT NULL,
  server_location varchar(50) DEFAULT NULL,
  max_conn decimal(10,0) DEFAULT NULL,
  ip_add varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table servers
--

INSERT INTO servers (server_id, server_name, server_location, max_conn, ip_add) VALUES
('17642231212', 'Palapat', 'Petro Jam, Palapat, Hagonoy, Bulacan', '1000', '192.168.62.15'),
('17642231213', 'San Sebastian', 'San Sebastian, Hagonoy, Bulacan', '1000', '192.168.22.12'),
('17642231215', 'Santa Elena', 'Sta Elena, Hagonoy, Bulacan', '1000', '192.168.63.5');

-- --------------------------------------------------------

--
-- Table structure for table systemlogs
--
CREATE TABLE systemlogs (
  log_id decimal(30,0) NOT NULL,
  user_id varchar(50) NOT NULL,
  time_date date NOT NULL DEFAULT current_timestamp,
  action_taken varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table tickets
--

CREATE TABLE tickets (
  account_id decimal(15,0) DEFAULT NULL,
  ticked_id decimal(11,0) NOT NULL,
  ticket_title varchar(100) DEFAULT NULL,
  ticket_description text DEFAULT NULL,
  stat decimal(2,0) DEFAULT NULL,
  technician_id varchar(50) DEFAULT NULL,
  tl_id varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table users
--

CREATE TABLE users (
  user_id varchar(50) NOT NULL,
  first_name varchar(50) DEFAULT NULL,
  middle_name varchar(50) DEFAULT NULL,
  last_name varchar(50) DEFAULT NULL,
  age decimal(5,0) DEFAULT NULL,
  email varchar(50) DEFAULT NULL,
  contact_num decimal(11,0) DEFAULT NULL,
  address varchar(256) DEFAULT NULL,
  profilepic bytea DEFAULT NULL,
  restriction decimal(11,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

select * from users
--
-- Dumping data for table users
--

INSERT INTO users (user_id, first_name, middle_name, last_name, age, email, contact_num, address, profilepic, restriction) VALUES
('102339512332', 'Kaye Lyn', NULL, 'Pangan', '99', 'kayelynpangan@gmail.com', '9099999999', 'Abulalas, Hagonoy, Bulacan', NULL, '25464136855'),
('102339512333', 'Kaye Lyn', NULL, 'Pangan', '99', 'kayelynpangan@gmail.com', '9099999999', 'Abulalas, Hagonoy, Bulacan', NULL, '25464136855'),
('102339512334', 'Kaye Lyn', NULL, 'Pangan', '99', 'kayelynpangan@gmail.com', '9099999999', 'Abulalas, Hagonoy, Bulacan', NULL, '25464136855'),
('102339512335', 'Kaye Lyn', NULL, 'Pangan', '99', 'kayelynpangan@gmail.com', '9099999999', 'Abulalas, Hagonoy, Bulacan', NULL, '25464136855'),
('102339512336', 'Kaye Lyn', NULL, 'Pangan', '99', 'kayelynpangan@gmail.com', '9099999999', 'Abulalas, Hagonoy, Bulacan', NULL, '25464136855'),
('102339512337', 'Kaye Lyn', NULL, 'Pangan', '99', 'kayelynpangan@gmail.com', '9099999999', 'Abulalas, Hagonoy, Bulacan', NULL, '25464136855'),
('102339512338', 'Kaye Lyn', NULL, 'Pangan', '99', 'kayelynpangan@gmail.com', '9099999999', 'Abulalas, Hagonoy, Bulacan', NULL, '25464136855'),
('16458364911', 'Palapat', '', 'Customer', '0', '', '0', '', '', '25464136855'),
('16458364951', 'Dharist', '', 'Coronel', '42', '', '0', '', '', '99999999999'),
('16458364981', 'Main', '', 'Staff', '0', '', '0', '', '', '25464136865');

--
-- Indexes for dumped tables
--

--
-- Indexes for table accounts
--
ALTER TABLE accounts
  ADD PRIMARY KEY (account_id),
  ADD CONSTRAINT user_id UNIQUE (user_id);

--
-- Indexes for table acounttype
--
ALTER TABLE acounttype
  ADD PRIMARY KEY (restriction_id);

--
-- Indexes for table api
--
ALTER TABLE api
  ADD PRIMARY KEY (API_ID);

--
-- Indexes for table login
--
ALTER TABLE login
  ADD PRIMARY KEY (username);

--
-- Indexes for table paymentoption
--
ALTER TABLE paymentoption
  ADD PRIMARY KEY (payment_id);

--
-- Indexes for table payments
--
ALTER TABLE payments
  ADD PRIMARY KEY (payment_id);

--
-- Indexes for table plans
--
ALTER TABLE plans
  ADD PRIMARY KEY (plan_id);

--
-- Indexes for table servers
--
ALTER TABLE servers
  ADD PRIMARY KEY (server_id);

--
-- Indexes for table systemlogs
--
ALTER TABLE systemlogs
  ADD PRIMARY KEY (log_id);

--
-- Indexes for table tickets
--
ALTER TABLE tickets
  ADD PRIMARY KEY (ticked_id);

--
-- Indexes for table users
--
ALTER TABLE users
  ADD PRIMARY KEY (user_id);
--
-- Constraints for dumped tables
--

--
-- Constraints for table accounts
--
ALTER TABLE accounts
  ADD CONSTRAINT accounts_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (user_id),
  ADD CONSTRAINT accounts_ibfk_2 FOREIGN KEY (server_conn) REFERENCES servers (server_id),
  ADD CONSTRAINT accounts_ibfk_3 FOREIGN KEY (curr_plan) REFERENCES plans (plan_id),
  ADD CONSTRAINT accounts_ibfk_4 FOREIGN KEY (curr_plan) REFERENCES plans (plan_id);

--
-- Constraints for table login
--
ALTER TABLE login
  ADD CONSTRAINT login_ibfk_1 FOREIGN KEY (account_id) REFERENCES users (user_id);

--
-- Constraints for table paymentoption
--
ALTER TABLE paymentoption
  ADD CONSTRAINT apiKey_FK FOREIGN KEY (api_key) REFERENCES api (API_ID);

--
-- Constraints for table payments
--
ALTER TABLE payments
  ADD CONSTRAINT paymentType_FK FOREIGN KEY (payment_type) REFERENCES paymentoption (payment_id),
  ADD CONSTRAINT payments_ibfk_1 FOREIGN KEY (account_id) REFERENCES accounts (account_id),
  ADD CONSTRAINT payments_ibfk_2 FOREIGN KEY (cashier_id) REFERENCES users (user_id),
  ADD CONSTRAINT payments_ibfk_3 FOREIGN KEY (plan) REFERENCES plans (plan_id);

--
-- Constraints for table systemlogs
--
ALTER TABLE systemlogs
  ADD CONSTRAINT systemlogs_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (user_id);

--
-- Constraints for table tickets
--
ALTER TABLE tickets
  ADD CONSTRAINT tickets_ibfk_1 FOREIGN KEY (account_id) REFERENCES accounts (account_id);

--
-- Constraints for table users
--
ALTER TABLE users
  ADD CONSTRAINT fk_accountRestriction FOREIGN KEY (restriction) REFERENCES acounttype (restriction_id);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;