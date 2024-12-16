"use client";
import { motion } from "framer-motion";
import { css } from "@/styled-system/css";
import { Button } from "react-aria-components";
import Image from "next/image";

export function Hero() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={css({
        minHeight: "100vh",
        backgroundColor: "#A23F3F",
        color: "white",
        position: "relative",
        padding: "2rem",
      })}
    >
      <div
        className={css({
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          height: "calc(100vh - 4rem)",
        })}
      >
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className={css({
              marginBottom: "2rem",
            })}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={css({
                fontSize: "1.125rem",
                letterSpacing: "0.1em",
                marginBottom: "0.5rem",
              })}
            >
              CHEF
            </motion.p>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={css({
                fontFamily: "Corinthia",
                fontSize: "4rem",
                fontWeight: "700",
              })}
            >
              Leon Korhonen
            </motion.h2>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={css({
              fontSize: "5rem",
              fontFamily: "Georgia, serif",
              lineHeight: "1.1",
              marginBottom: "2rem",
            })}
          >
            Harvest
            <br />
            Table
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={css({
              marginBottom: "3rem",
            })}
          >
            <p
              className={css({
                fontSize: "1.125rem",
                letterSpacing: "0.05em",
              })}
            >
              EST
            </p>
            <p
              className={css({
                fontSize: "1.125rem",
                letterSpacing: "0.05em",
              })}
            >
              SINCE / 1975
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className={css({
              display: "flex",
              gap: "1rem",
            })}
          >
            <Button
              className={css({
                backgroundColor: "white",
                color: "#A23F3F",
                padding: "1rem 2rem",
                fontSize: "1rem",
                letterSpacing: "0.1em",
                border: "none",
                borderRadius: "full",
                cursor: "pointer",
                transition: "all 0.2s ease",
                _hover: {
                  backgroundColor: "#f0f0f0",
                  transform: "translateY(-2px)",
                },
                _pressed: {
                  backgroundColor: "#e0e0e0",
                  transform: "translateY(0)",
                },
              })}
            >
              BOOK NOW
            </Button>
            <Button
              onPress={scrollToMenu}
              className={css({
                backgroundColor: "transparent",
                color: "white",
                padding: "1rem 2rem",
                fontSize: "1rem",
                letterSpacing: "0.1em",
                border: "1px solid white",
                borderRadius: "full",
                cursor: "pointer",
                transition: "all 0.2s ease",
                _hover: {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-2px)",
                },
                _pressed: {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  transform: "translateY(0)",
                },
              })}
            >
              VIEW MENU
            </Button>
          </motion.div>
        </motion.div>

        {/* Right side - Image grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className={css({
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: "2rem",
            position: "relative",
          })}
        >
          <div
            className={css({
              gridColumn: "1",
              gridRow: "1 / span 2",
              aspectRatio: "1/2",
              overflow: "hidden",
              borderRadius: "md",
              position: "relative",
            })}
          >
            <Image
              src="/dish1.jpg"
              alt="Signature dish"
              fill
              className={css({
                objectFit: "cover",
              })}
            />
          </div>
          <div
            className={css({
              gridColumn: "2",
              gridRow: "2",
              aspectRatio: "1",
              overflow: "hidden",
              borderRadius: "md",
              position: "relative",
            })}
          >
            <Image
              src="/dish2.jpg"
              alt="Featured dish"
              fill
              className={css({
                objectFit: "cover",
              })}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
