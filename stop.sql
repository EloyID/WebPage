-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-03-2017 a las 16:54:55
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `stop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animaux`
--

CREATE TABLE `animaux` (
  `resp` text NOT NULL,
  `descrip` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `animaux`
--

INSERT INTO `animaux` (`resp`, `descrip`) VALUES
('araignee', 'rare'),
('chien', 'normal'),
('araignee', 'rare');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `films`
--

CREATE TABLE `films` (
  `resp` text NOT NULL,
  `descrip` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `films`
--

INSERT INTO `films` (`resp`, `descrip`) VALUES
('amelie', 'normal'),
('anaconda', 'rare');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fleuves`
--

CREATE TABLE `fleuves` (
  `resp` text NOT NULL,
  `descrip` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `fleuves`
--

INSERT INTO `fleuves` (`resp`, `descrip`) VALUES
('amazone', 'normal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `langages`
--

CREATE TABLE `langages` (
  `resp` text NOT NULL,
  `descrip` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `langages`
--

INSERT INTO `langages` (`resp`, `descrip`) VALUES
('ajax', 'rare');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pays`
--

CREATE TABLE `pays` (
  `resp` text NOT NULL,
  `descrip` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pays`
--

INSERT INTO `pays` (`resp`, `descrip`) VALUES
('allemagne', 'normal'),
('angola', 'rare'),
('allemagne', 'normal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stop`
--

CREATE TABLE `stop` (
  `tipo` text,
  `resp` text,
  `descrip` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `stop`
--

INSERT INTO `stop` (`tipo`, `resp`, `descrip`) VALUES
('animaux', 'araignee', 'rare'),
('animaux', 'araignee', 'rare'),
('animaux', 'araignee', 'rare'),
('animaux', 'jon', 'rare');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `villes`
--

CREATE TABLE `villes` (
  `resp` text NOT NULL,
  `descrip` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `villes`
--

INSERT INTO `villes` (`resp`, `descrip`) VALUES
('amsterdam', 'normal'),
('ankara', 'rare');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
