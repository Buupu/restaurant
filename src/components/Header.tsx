"use client";
import { css } from "@/styled-system/css";
import { Button } from "react-aria-components";
import { HiMenu } from "react-icons/hi";

export function Header() {
  return (
    <header
      className={css({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "1.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 50,
        backgroundColor: "transparent",
      })}
    >
      {/* Hamburger Menu */}
      <button
        className={css({
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0.5rem",
          color: "white",
          display: "flex",
          alignItems: "center",
          _hover: {
            opacity: 0.8,
          },
        })}
      >
        <HiMenu size={24} />
      </button>

      {/* Logo */}
      <div
        className={css({
          fontFamily: "Georgia, serif",
          fontSize: "1.5rem",
          color: "white",
          fontStyle: "italic",
        })}
      >
        Harvest Table
      </div>

      {/* Reservations Button */}
      <Button
        className={css({
          backgroundColor: "transparent",
          color: "white",
          padding: "0.5rem 1rem",
          fontSize: "0.875rem",
          letterSpacing: "0.1em",
          border: "1px solid white",
          borderRadius: "full",
          cursor: "pointer",
          transition: "all 0.2s ease",
          _hover: {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
          _pressed: {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        })}
      >
        RESERVATIONS
      </Button>
    </header>
  );
}
