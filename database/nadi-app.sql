-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2023 at 10:54 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nadi-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `status` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` datetime DEFAULT NULL,
  `creator_id` varchar(36) DEFAULT NULL,
  `modifier_id` varchar(36) DEFAULT NULL,
  `name` varchar(256) DEFAULT NULL,
  `image` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id`, `status`, `created_at`, `modified_at`, `creator_id`, `modifier_id`, `name`, `image`) VALUES
('7557e276-9293-11ed-95d7-b0227a7395f6', 1, '2023-01-12 17:08:44', NULL, NULL, NULL, 'RSIA Herawaty', 'rsiaherawaty.png'),
('83ef4bf2-9293-11ed-95d7-b0227a7395f6', 1, '2023-01-12 17:09:16', NULL, NULL, NULL, 'Dias Project', 'diasproject.png'),
('95b3fc13-9293-11ed-95d7-b0227a7395f6', 1, '2023-01-12 17:09:41', NULL, NULL, NULL, 'Klinik Herawaty', 'klinikherawaty.png'),
('a6369447-9293-11ed-95d7-b0227a7395f6', 1, '2023-01-12 17:10:10', NULL, NULL, NULL, 'Sapi Jalu', 'sapijalu.png'),
('b7435c8a-9293-11ed-95d7-b0227a7395f6', 1, '2023-01-12 17:10:48', NULL, NULL, NULL, 'Eka Cell Baru', 'ekacellbaru.png');

-- --------------------------------------------------------

--
-- Table structure for table `configuration`
--

CREATE TABLE `configuration` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `status` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` datetime DEFAULT NULL,
  `creator_id` varchar(36) DEFAULT NULL,
  `modifier_id` varchar(36) DEFAULT NULL,
  `faveicon` varchar(256) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `logo_white` varchar(256) DEFAULT NULL,
  `logo_black` varchar(256) DEFAULT NULL,
  `hero_background_image` varchar(256) DEFAULT NULL,
  `hero_text1` varchar(256) DEFAULT NULL,
  `hero_text2` varchar(256) DEFAULT NULL,
  `hero_text_button1` varchar(100) DEFAULT NULL,
  `demo_url` text DEFAULT NULL,
  `hero_text_button2` varchar(100) DEFAULT NULL,
  `hero_banner_image` varchar(256) DEFAULT NULL,
  `service_text1` varchar(256) DEFAULT NULL,
  `service_text2` varchar(256) DEFAULT NULL,
  `service_background_image` varchar(256) DEFAULT NULL,
  `pricing_text1` varchar(256) DEFAULT NULL,
  `pricing_text2` varchar(256) DEFAULT NULL,
  `pricing_text3` text DEFAULT NULL,
  `pricing_text_button_daily` varchar(100) DEFAULT NULL,
  `pricing_text_button_monthly` varchar(100) DEFAULT NULL,
  `pricing_text_button_yearly` varchar(100) DEFAULT NULL,
  `pricing_text1_daily` varchar(256) DEFAULT NULL,
  `pricing_text2_daily` varchar(256) DEFAULT NULL,
  `pricing_text3_daily` varchar(256) DEFAULT NULL,
  `pricing_text4_daily` varchar(256) DEFAULT NULL,
  `pricing_text_button_trial` varchar(100) DEFAULT NULL,
  `pricing_text1_monthly` varchar(256) DEFAULT NULL,
  `pricing_text2_monthly` varchar(256) DEFAULT NULL,
  `pricing_text3_monthly` varchar(256) DEFAULT NULL,
  `pricing_text4_monthly` varchar(256) DEFAULT NULL,
  `pricing_text1_yearly` varchar(256) DEFAULT NULL,
  `pricing_text2_yearly` varchar(256) DEFAULT NULL,
  `pricing_text3_yearly` varchar(256) DEFAULT NULL,
  `pricing_text4_yearly` varchar(256) DEFAULT NULL,
  `subscribe_text1` varchar(256) DEFAULT NULL,
  `subscribe_text2` varchar(256) DEFAULT NULL,
  `subscribe_text3` varchar(256) DEFAULT NULL,
  `subscribe_text_button1` varchar(100) DEFAULT NULL,
  `subscribe_text_watch_demo` varchar(256) DEFAULT NULL,
  `brand_text1` varchar(256) DEFAULT NULL,
  `brand_text2` varchar(256) DEFAULT NULL,
  `footer_text1` varchar(256) DEFAULT NULL,
  `copyright` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `configuration`
--

INSERT INTO `configuration` (`id`, `status`, `created_at`, `modified_at`, `creator_id`, `modifier_id`, `faveicon`, `author`, `description`, `title`, `logo_white`, `logo_black`, `hero_background_image`, `hero_text1`, `hero_text2`, `hero_text_button1`, `demo_url`, `hero_text_button2`, `hero_banner_image`, `service_text1`, `service_text2`, `service_background_image`, `pricing_text1`, `pricing_text2`, `pricing_text3`, `pricing_text_button_daily`, `pricing_text_button_monthly`, `pricing_text_button_yearly`, `pricing_text1_daily`, `pricing_text2_daily`, `pricing_text3_daily`, `pricing_text4_daily`, `pricing_text_button_trial`, `pricing_text1_monthly`, `pricing_text2_monthly`, `pricing_text3_monthly`, `pricing_text4_monthly`, `pricing_text1_yearly`, `pricing_text2_yearly`, `pricing_text3_yearly`, `pricing_text4_yearly`, `subscribe_text1`, `subscribe_text2`, `subscribe_text3`, `subscribe_text_button1`, `subscribe_text_watch_demo`, `brand_text1`, `brand_text2`, `footer_text1`, `copyright`) VALUES
('96298075-9545-11ed-8fcb-c465162ee099', 1, '2023-01-16 03:18:15', NULL, NULL, NULL, 'favicon-nadi.png', 'Nadi Aninda Karya', 'The best solution to grow your business with technology', 'Nadi App - Growing up with Nadi App', 'logo-white-nadi.png', 'logo-color-nadi.png', 'banner-background.png', 'Advanced Feature to Grow Your Business', '\nImprove your business by having a website.<br>\nSubscribe now to have a website according to your needs.', 'Tell Your Business', 'http://www.youtube.com/watch?v=hAP2QF--2Dg', 'Watch Video', 'banner-image.png', 'Services We Provide', 'Support website development according to your wishes and needs', NULL, 'Plans &amp; Pricing', 'Check Our Valuable Price', 'Objectively market-driven intellectual capital rather than covalent best practices facilitate strategic information before innovation.', 'Daily', 'Monthly', 'Yearly', 'Pro Daily', 'Only need for a few days?\r\n', 'Rp. 1.500', '/Day', 'Start 14-Days Trial', 'Pro Monthly', 'Set the cost every month fits perfectly with this', 'Rp. 35.000', '/Month', 'Pro Yearly', 'Get even cheaper for a yearly subscription', 'Rp. 375.000', '/Year', 'Let\'s Try! Get Free Support', 'Start Your 14-Day Free Trial', 'We can help you to create your dream website for better business revenue.', 'Contact with Us', 'Watch Demo', 'The Companies Trusted Us', 'List of Companies Trusted Us', 'Our latest news, articles, and resources, we will sent to your inbox weekly.', '&copy; 2023 Nadi-App All Rights Reserved.');

-- --------------------------------------------------------

--
-- Table structure for table `customer_type`
--

CREATE TABLE `customer_type` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `status` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` datetime DEFAULT NULL,
  `creator_id` varchar(36) DEFAULT NULL,
  `modifier_id` varchar(36) DEFAULT NULL,
  `code` varchar(256) DEFAULT NULL,
  `name` varchar(256) DEFAULT NULL,
  `message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer_type`
--

INSERT INTO `customer_type` (`id`, `status`, `created_at`, `modified_at`, `creator_id`, `modifier_id`, `code`, `name`, `message`) VALUES
('44dcb5cb-b0f7-11ed-94b0-c465162ee099', 1, '2023-02-20 09:18:29', NULL, NULL, NULL, 'PHOTOGRAPHY', 'Web Photography', NULL),
('c870be42-b0f8-11ed-94b0-c465162ee099', 1, '2023-02-20 09:29:46', NULL, NULL, NULL, 'CLINIC', 'Web Klinik', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `feature`
--

CREATE TABLE `feature` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `status` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` datetime DEFAULT NULL,
  `creator_id` varchar(36) DEFAULT NULL,
  `modifier_id` varchar(36) DEFAULT NULL,
  `title` varchar(256) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feature`
--

INSERT INTO `feature` (`id`, `status`, `created_at`, `modified_at`, `creator_id`, `modifier_id`, `title`, `description`) VALUES
('0995b937-9292-11ed-95d7-b0227a7395f6', 1, '2023-01-12 16:58:46', NULL, NULL, NULL, 'Free Support', 'Free support'),
('18a81093-9292-11ed-95d7-b0227a7395f6', 1, '2023-01-12 16:59:16', NULL, NULL, NULL, 'Free Domain', 'Free domain extention .my.id'),
('2769f628-9292-11ed-95d7-b0227a7395f6', 1, '2023-01-12 16:59:31', NULL, NULL, NULL, 'Chat', 'Free Trial 14-day'),
('34915514-9292-11ed-95d7-b0227a7395f6', 1, '2023-01-12 16:59:55', NULL, NULL, NULL, 'Activity', 'No minimal subscribing time'),
('487458da-9292-11ed-95d7-b0227a7395f6', 1, '2023-01-12 17:00:29', NULL, NULL, NULL, 'Live Visitor', 'Cancel anytime'),
('fe4db63c-9291-11ed-95d7-b0227a7395f6', 1, '2023-01-12 16:58:24', NULL, NULL, NULL, 'Domain .com', 'Only +50k for domain .com /year');

-- --------------------------------------------------------

--
-- Table structure for table `prospective_customer`
--

CREATE TABLE `prospective_customer` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `status` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` datetime DEFAULT NULL,
  `creator_id` varchar(36) DEFAULT NULL,
  `modifier_id` varchar(36) DEFAULT NULL,
  `customer_type_id` varchar(36) DEFAULT NULL,
  `name` varchar(256) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `address` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `status` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` datetime DEFAULT NULL,
  `creator_id` varchar(36) DEFAULT NULL,
  `modifier_id` varchar(36) DEFAULT NULL,
  `image` varchar(256) DEFAULT NULL,
  `title` varchar(256) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`id`, `status`, `created_at`, `modified_at`, `creator_id`, `modifier_id`, `image`, `title`, `description`) VALUES
('4cbf6043-9290-11ed-95d7-b0227a7395f6', 1, '2023-01-12 16:44:56', NULL, NULL, NULL, 'company.png', 'Web Company Profile', 'Introducing your business to a wider world with an attractive appearance'),
('4cbf8350-9290-11ed-95d7-b0227a7395f6', 1, '2023-01-12 16:44:57', NULL, NULL, NULL, 'studio.png', 'Web Photo Studio', 'Get new customer and provide more interesting customer experience'),
('81a06cf1-9290-11ed-95d7-b0227a7395f6', 1, '2023-01-12 16:46:50', NULL, NULL, NULL, 'ecommerce.png', 'Web E-commerce', 'Increase your sales with an e-commerce system'),
('81a08f82-9290-11ed-95d7-b0227a7395f6', 1, '2023-01-12 16:46:52', NULL, NULL, NULL, 'pos-terminal.png', 'Web Point Of Sale', 'Speed ​​up your cashier service with a POS system'),
('ca19fa5d-9290-11ed-95d7-b0227a7395f6', 1, '2023-01-12 16:48:26', NULL, NULL, NULL, 'profit.png', 'Web Accounting', 'Make sure your finances are well recorded, and get a complete report'),
('ca1a1866-9290-11ed-95d7-b0227a7395f6', 1, '2023-01-12 16:48:28', NULL, NULL, NULL, 'wedding-invitation.png', 'Web Wedding Invitation', 'Create attractive online wedding invitations for your special day.');

-- --------------------------------------------------------

--
-- Table structure for table `social_media`
--

CREATE TABLE `social_media` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `status` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` datetime DEFAULT NULL,
  `creator_id` varchar(36) DEFAULT NULL,
  `modifier_id` varchar(36) DEFAULT NULL,
  `name` varchar(256) DEFAULT NULL,
  `image` varchar(256) DEFAULT NULL,
  `link` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subscribe_feature`
--

CREATE TABLE `subscribe_feature` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `status` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` datetime DEFAULT NULL,
  `creator_id` varchar(36) DEFAULT NULL,
  `modifier_id` varchar(36) DEFAULT NULL,
  `title` varchar(256) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `status` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` datetime DEFAULT NULL,
  `creator_id` varchar(36) DEFAULT NULL,
  `modifier_id` varchar(36) DEFAULT NULL,
  `name` varchar(256) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `role_code` tinyint(4) DEFAULT NULL,
  `image` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `status`, `created_at`, `modified_at`, `creator_id`, `modifier_id`, `name`, `email`, `password`, `role_code`, `image`) VALUES
('13692f58-b0e9-11ed-94b0-c465162ee099', 1, '2023-02-20 07:36:54', NULL, NULL, NULL, 'Dodi Novembri', 'dodinovembri32@gmail.com', '$2y$10$eDmTraUWTTb1cVLiclyTP.o20GBpV5.lkVwDB7K9NBk5VzzjI45B.', 0, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `configuration`
--
ALTER TABLE `configuration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_type`
--
ALTER TABLE `customer_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feature`
--
ALTER TABLE `feature`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prospective_customer`
--
ALTER TABLE `prospective_customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `social_media`
--
ALTER TABLE `social_media`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscribe_feature`
--
ALTER TABLE `subscribe_feature`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
