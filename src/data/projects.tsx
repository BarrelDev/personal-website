/**
 * Format for adding a project to the list of projects:
 * {
 *  name: "",
 *  description: "",
 *  img: img,
 *  url: ""
 * },
 * */
import hopper from "../assets/images/Hopper.jpeg";
import research_link from "../assets/pdf/An_Extension_of_Pathfinding_Algorithms_for_Randomly_Determined_Speeds.pdf";
import research_img from "../assets/images/research_img.png";

import ichbiah from "../assets/images/ichbiah.jpg";
import potion_mod from "../assets/images/random-potion-mod.png";
import cac from "../assets/images/Congressional-App-Challenge-Submission.png";
import tilted from "../assets/images/tilted.png";
import food_game from "../assets/images/food-game.png";
import yt_scraper from "../assets/images/ytscraper.png";
import passwd_manager from "../assets/images/passwordmanager.png";

export const projects = [
  {
    name: "Password Manager",
    description: "A simple, local-first password manager written in Python.",
    img: passwd_manager,
    url: "https://github.com/BarrelDev/password-manager",
    tags: ["Utilities"],
  },
  {
    name: "Hopper",
    description: "The codebase behind Team 3637's 2024 world championship robot, Dalek Floyd.",
    img: hopper,
    url: "https://github.com/FRC-3637-Daleks/Hopper",
    tags: ["Robotics"],
  },
  {
    name: "Pathfinding Research",
    description: "A research paper regarding pathfinding algorithms in 3D voxel space, done with Dr. Wu from NJIT.",
    img: research_img,
    url: research_link,
    tags: ["Research"],
  },
  {
    name: "Random Potion Mod",
    description: "A Minecraft mod that gives the player random potion effects, using Fabric.",
    img: potion_mod,
    url: "https://github.com/BarrelDev/Random-Potion-Mod",
    tags: ["Games"],
  },
  {
    name: "Ichbiah",
    description: "The codebase behind Team 3637's 2025 robot.",
    img: ichbiah,
    url: "https://github.com/FRC-3637-Daleks/Ichbiah",
    tags: ["Robotics"],
  },
  {
    name: "Pandemic Inc.",
    description: "My submission for the 2020 Congressional App Challenge.",
    img: cac,
    url: "https://github.com/BarrelDev/CongressionalAppChallenge2020",
    tags: ["Games"],
  },
  {
    name: "Food Game",
    description: "A WIP game about crafting food for customers, using Raylib.",
    img: food_game,
    url: "https://github.com/BarrelDev/FoodGame",
    titleColor: "warning",
    textColor: "warning",
    tags: ["Games"],
  },
  {
    name: "Youtube Scraper",
    description: "A YouTube scraper that uses the YouTube Data API to get the latest videos from your subscription feed.",
    img: yt_scraper,
    url: "https://github.com/BarrelDev/youtubeScraper",
    tags: ["Utilities"],
  },
  {
    name: "Tilted",
    description: "An endless platformer game made using Unity.",
    img: tilted,
    url: "https://github.com/BarrelDev/Tilted",
    textColor: "dark",
    tags: ["Games"],
  },
];
