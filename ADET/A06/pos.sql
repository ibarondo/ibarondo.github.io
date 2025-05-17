-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2025 at 12:00 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(11) NOT NULL,
  `categoryName` varchar(20) NOT NULL,
  `categoryImage` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `categoryName`, `categoryImage`) VALUES
(1, 'Dresses', 'dress.png'),
(2, 'Tops', 'top.png'),
(3, 'Bottoms', 'bottom.png'),
(4, 'Bags', 'bag.png'),
(5, 'Shoes', 'shoes.png'),
(6, 'Accessories', 'aj.png');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `code` varchar(11) NOT NULL,
  `price` int(5) NOT NULL,
  `image` varchar(30) NOT NULL,
  `categoryID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `name`, `code`, `price`, `image`, `categoryID`) VALUES
(1, 'Floral Print Dress', 'DR001', 999, 'dress1.png', 1),
(2, 'Off Shoulder Pleated Dress', 'DR002', 950, 'dress2.png', 1),
(3, 'Crisscross Tie Backless Dress', 'DR003', 925, 'dress3.png', 1),
(4, 'Mesh Strap Romantic Dress', 'DR004', 899, 'dress4.png', 1),
(5, 'Simple Strapless Dress', 'DR005', 875, 'dress5.png', 1),
(6, 'Black Maxi Dress', 'DR006', 850, 'dress6.png', 1),
(7, 'Brown Halter Neck Dress', 'DR007', 825, 'dress7.png', 1),
(8, 'Green Velvet Dress', 'DR008', 799, 'dress8.png', 1),
(9, 'High Slit Tie Dye Pink Dress', 'DR009', 699, 'dress9.png', 1),
(10, 'Split Hem Tube Green Top', 'TP001', 399, 'top1.png', 2),
(11, 'Casual Sleeve Cropped Top', 'TP002', 375, 'top2.png', 2),
(12, 'Puff Sleeve', 'TP003', 350, 'top3.png', 2),
(13, 'Off-Shoulder Top', 'TP004', 325, 'top4.png', 2),
(14, 'Backless Halter Top', 'TP005', 310, 'top5.png', 2),
(15, 'Backless Bandana Top', 'TP006', 299, 'top6.png', 2),
(16, 'Knotted Front 2-In-1 T-Shirt', 'TP007', 285, 'top7.png', 2),
(17, 'Doll Bowknot Decor Puff Sleeve', 'TP008', 270, 'top8.png', 2),
(18, 'Y2K Leopard Halter Neck Top', 'TP009', 250, 'top9.png', 2),
(19, 'High Waist Pants', 'BT001', 459, 'bottom1.png', 3),
(20, 'Summer White Hem Skirt', 'BT002', 399, 'bottom2.png', 3),
(21, 'Floral Print A-Line Skirt', 'BT003', 365, 'bottom3.png', 3),
(22, 'Double Pocket Straight Pants', 'BT004', 389, 'bottom4.png', 3),
(23, 'Retro High Waist Mini Skirt', 'BT005', 349, 'bottom5.png', 3),
(24, 'High Waist Flared Pants', 'BT006', 379, 'bottom6.png', 3),
(25, 'Wide Leg Straight Pants', 'BT007', 279, 'bottom7.png', 3),
(26, 'Tweed High Waist Mini Skirt', 'BT008', 359, 'bottom8.png', 3),
(27, 'Minimalist Leather Shoulder Ba', 'BG001', 399, 'bag1.png', 4),
(28, 'Chain Strap Crossbody Bag', 'BG002', 375, 'bag2.png', 4),
(29, 'Trendy Crescent Hobo Bag', 'BG003', 350, 'bag3.png', 4),
(30, 'Mini Flap Top Handle Bag', 'BG004', 325, 'bag4.png', 4),
(31, 'Croc Embossed Bucket Bag', 'BG005', 310, 'bag5.png', 4),
(32, 'Soft Ruched Shoulder Purse', 'BG006', 299, 'bag6.png', 4),
(33, 'Shoulder Tote Bag', 'BG007', 199, 'bag7.png', 4),
(34, 'Minimalist Crocodile Embossed ', 'BG008', 259, 'bag8.png', 4),
(35, 'Two Tone Point Toe Flats', 'SH001', 799, 'shoes1.png', 5),
(36, 'Wine Red Pointed Toe', 'SH002', 689, 'shoes2.png', 5),
(37, 'Solid Color Ankle Boots', 'SH003', 899, 'shoes3.png', 5),
(38, 'White Sneakers For Women', 'SH004', 749, 'shoes4.png', 5),
(39, 'Black High Heels', 'SH005', 849, 'shoes5.png', 5),
(40, 'Harness Cutout Open Toe', 'SH006', 719, 'shoes6.png', 5),
(41, 'Sports White Shoes', 'SH007', 679, 'shoes7.png', 5),
(42, 'Elegant Ankle Strap Heels', 'SH008', 869, 'shoes8.png', 5),
(43, 'Flower Earrings', 'AC001', 159, 'aj1.png', 6),
(44, 'Beaded Bracelets', 'AC002', 129, 'aj2.png', 6),
(45, 'Gold Strap Quartz Watch', 'AC003', 199, 'aj3.png', 6),
(46, 'Embroidered Baseball Cap', 'AC004', 89, 'aj4.png', 6),
(47, 'Shaped Plastic Hair Clips', 'AC005', 119, 'aj5.png', 6),
(48, 'Cherry Charm Necklace', 'AC006', 129, 'aj6.png', 6),
(49, 'Fashionable Ring Set', 'AC007', 99, 'aj7.png', 6),
(50, 'Retro Leather Headband', 'AC008', 79, 'aj8.png', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
