"use client";
import { motion, AnimatePresence } from "framer-motion";
import { css } from "@/styled-system/css";
import Image from "next/image";
import { useState } from "react";

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  image?: string;
};

const timeline: TimelineEvent[] = [
  {
    year: "1975",
    title: "The Beginning",
    description:
      "Harvest Table opens its doors in the heart of the city, introducing a new standard of fine dining.",
    image: "/history-1975.jpg",
  },
  {
    year: "1996",
    title: "Celebrating locally sourced ingredients",
    description:
      "The first scale-up, recipe improvements and successful experiments on our dishes that our diners love so much.",
    image: "/history-1996.jpg",
  },
  {
    year: "2004",
    title: "First Michelin Star",
    description:
      "Recognition of our commitment to culinary excellence and innovative dining experiences.",
    image: "/history-2004.jpg",
  },
  {
    year: "2012",
    title: "Expansion & Renovation",
    description:
      "Major renovation to create an even more elegant and comfortable dining space for our guests.",
    image: "/history-2012.jpg",
  },
  {
    year: "2016",
    title: "Second Michelin Star",
    description:
      "Further recognition of our dedication to exceptional cuisine and service.",
    image: "/history-2016.jpg",
  },
];

export function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className={css({
        backgroundColor: "white",
        padding: "6rem 2rem",
        minHeight: "100vh",
      })}
    >
      <div
        className={css({
          maxWidth: "1200px",
          margin: "0 auto",
        })}
      >
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "400px 4px 1fr",
            gap: "4rem",
          })}
        >
          {/* Years navigation */}
          <div
            className={css({
              position: "relative",
            })}
          >
            <p
              className={css({
                position: "absolute",
                right: "100%",
                top: "1.5rem",
                fontSize: "0.875rem",
                letterSpacing: "0.1em",
                color: "#666",
                marginRight: "4rem",
                whiteSpace: "nowrap",
                fontWeight: "500",
              })}
            >
              OUR HISTORY
            </p>
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                position: "sticky",
                top: "8rem",
                height: "fit-content",
              })}
            >
              {timeline.map((event, index) => (
                <button
                  key={event.year}
                  onClick={() => setActiveIndex(index)}
                  className={css({
                    fontSize: "7rem",
                    fontFamily: "Georgia, serif",
                    color: activeIndex === index ? "#A23F3F" : "#E5E5E5",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    _hover: {
                      color: "#A23F3F",
                    },
                    lineHeight: "1",
                  })}
                >
                  {event.year}
                </button>
              ))}
            </div>
          </div>

          {/* Vertical bar with indicator */}
          <div
            className={css({
              position: "relative",
              height: "calc((5 - 1) * (7rem + 2rem) + 7rem)",
              backgroundColor: "#E5E5E5",
              width: "2px",
              marginTop: "1.5rem",
            })}
          >
            <motion.div
              animate={{
                top: `${activeIndex * (7 + 2)}rem`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className={css({
                position: "absolute",
                width: "4px",
                height: "7rem",
                backgroundColor: "#A23F3F",
                left: "-1px",
              })}
            />
          </div>

          {/* Timeline content */}
          <div
            className={css({
              position: "relative",
              display: "flex",
              alignItems: "center",
              minHeight: "calc((5 - 1) * (7rem + 2rem) + 7rem)",
            })}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={css({
                  width: "100%",
                })}
              >
                <div
                  className={css({
                    marginBottom: "2rem",
                    position: "relative",
                    height: "400px",
                    borderRadius: "md",
                    overflow: "hidden",
                  })}
                >
                  <Image
                    src={timeline[activeIndex].image!}
                    alt={timeline[activeIndex].title}
                    fill
                    className={css({
                      objectFit: "cover",
                    })}
                  />
                </div>
                <div>
                  <h3
                    className={css({
                      fontSize: "2.5rem",
                      fontFamily: "Georgia, serif",
                      marginBottom: "1.5rem",
                      color: "#A23F3F",
                    })}
                  >
                    {timeline[activeIndex].title}
                  </h3>
                  <p
                    className={css({
                      fontSize: "1.125rem",
                      color: "#666",
                      lineHeight: "1.6",
                      maxWidth: "600px",
                    })}
                  >
                    {timeline[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
