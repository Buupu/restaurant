"use client";
import { useState } from "react";
import { css } from "@/styled-system/css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = {
  name: string;
  price: number;
  description?: string;
};

type MenuSection = {
  id: string;
  name: string;
  items: MenuItem[];
  image: string;
};

const menuSections: MenuSection[] = [
  {
    id: "starters",
    name: "STARTERS",
    image: "/starters.jpg",
    items: [
      {
        name: "French Onion Soup",
        price: 12,
        description: "Caramelized onions, beef broth, gruyere cheese crust",
      },
      {
        name: "Beef Tartare",
        price: 16,
        description:
          "Hand-cut beef, shallots, capers, quail egg, toasted baguette",
      },
      {
        name: "Roasted Beet Salad",
        price: 14,
        description:
          "Golden and red beets, goat cheese, candied walnuts, honey vinaigrette",
      },
      {
        name: "Seared Scallops",
        price: 18,
        description:
          "Pan-seared sea scallops, cauliflower purée, crispy pancetta, herb oil",
      },
      {
        name: "Wild Mushroom Risotto",
        price: 15,
        description:
          "Arborio rice, forest mushrooms, aged parmesan, truffle oil",
      },
    ],
  },
  {
    id: "mains",
    name: "MAINS",
    image: "/mains.jpg",
    items: [
      {
        name: "Pan-Seared Pacific Salmon",
        price: 28,
        description:
          "Wild-caught salmon, lemon butter sauce, seasonal vegetables",
      },
      {
        name: "Beef Tenderloin",
        price: 36,
        description:
          "8oz grass-fed beef, truffle mashed potatoes, roasted asparagus",
      },
      {
        name: "Duck Confit",
        price: 32,
        description: "Crispy duck leg, braised lentils, cherry gastrique",
      },
      {
        name: "Rack of Lamb",
        price: 38,
        description: "Herb-crusted New Zealand lamb, ratatouille, rosemary jus",
      },
      {
        name: "Lobster Linguine",
        price: 34,
        description:
          "Fresh pasta, butter-poached lobster, cherry tomatoes, saffron cream",
      },
    ],
  },
  {
    id: "desserts",
    name: "DESSERTS",
    image: "/desserts.jpg",
    items: [
      {
        name: "Dark Chocolate Soufflé",
        price: 12,
        description:
          "Valrhona chocolate, vanilla bean ice cream (15 min preparation)",
      },
      {
        name: "Crème Brûlée",
        price: 10,
        description: "Tahitian vanilla, caramelized sugar, fresh berries",
      },
      {
        name: "Apple Tarte Tatin",
        price: 11,
        description: "Caramelized apples, puff pastry, calvados cream",
      },
      {
        name: "Tiramisu",
        price: 11,
        description:
          "Espresso-soaked ladyfingers, mascarpone cream, cocoa dust",
      },
      {
        name: "Lemon Meringue",
        price: 10,
        description:
          "Citrus curd, torched Italian meringue, shortbread crumble",
      },
    ],
  },
];

export function Menu() {
  const [activeSection, setActiveSection] = useState<string>("starters");

  return (
    <section
      id="menu-section"
      className={css({
        minHeight: "100vh",
        backgroundColor: "white",
        padding: "6rem 2rem",
      })}
    >
      <div
        className={css({
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        })}
      >
        {/* Left side - Image */}
        <div
          className={css({
            position: "sticky",
            top: "8rem",
            height: "600px",
            borderRadius: "md",
            overflow: "hidden",
          })}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={css({
                position: "relative",
                width: "100%",
                height: "100%",
              })}
            >
              <Image
                src={
                  menuSections.find((s) => s.id === activeSection)?.image || ""
                }
                alt="Menu section"
                fill
                className={css({
                  objectFit: "cover",
                })}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right side - Menu */}
        <div>
          <div
            className={css({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "3rem",
              position: "relative",
            })}
          >
            <h2
              className={css({
                fontSize: "3.5rem",
                fontFamily: "Georgia, serif",
              })}
            >
              Menu
            </h2>
            <div
              className={css({
                width: "80px",
                height: "2px",
                backgroundColor: "black",
                position: "relative",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: "-4px",
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "black",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-4px",
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "black",
                },
              })}
            />
          </div>

          {/* Menu sections */}
          <div
            className={css({
              display: "flex",
              gap: "1rem",
              marginBottom: "3rem",
              flexWrap: "wrap",
            })}
          >
            {menuSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={css({
                  padding: "0.5rem 1rem",
                  backgroundColor:
                    activeSection === section.id ? "black" : "transparent",
                  color: activeSection === section.id ? "white" : "black",
                  border: "1px solid black",
                  borderRadius: "full",
                  fontSize: "0.875rem",
                  letterSpacing: "0.1em",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  _hover: {
                    backgroundColor:
                      activeSection === section.id ? "black" : "#f0f0f0",
                  },
                })}
              >
                {section.name}
              </button>
            ))}
          </div>

          {/* Menu items */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {menuSections
              .find((s) => s.id === activeSection)
              ?.items.map((item, index) => (
                <div
                  key={index}
                  className={css({
                    borderBottom: "1px solid #e0e0e0",
                    paddingY: "1.5rem",
                    "&:last-child": {
                      borderBottom: "none",
                    },
                  })}
                >
                  <div
                    className={css({
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: "0.5rem",
                    })}
                  >
                    <h3
                      className={css({
                        fontSize: "1.25rem",
                        fontFamily: "Georgia, serif",
                      })}
                    >
                      {item.name}
                    </h3>
                    <span
                      className={css({
                        fontSize: "1.125rem",
                      })}
                    >
                      £{item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p
                      className={css({
                        color: "#666",
                        fontSize: "0.875rem",
                      })}
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
