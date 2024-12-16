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
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      })}
    >
      {/* Hamburger Menu */}
      <button
        className={css({
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0.5rem",
          color: "black",
          display: "flex",
          alignItems: "center",
          _hover: {
            opacity: 0.7,
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
          color: "black",
          fontStyle: "italic",
        })}
      >
        Harvest Table
      </div>

      {/* Reservations Button */}
      <Button
        className={css({
          backgroundColor: "black",
          color: "white",
          padding: "0.5rem 1rem",
          fontSize: "0.875rem",
          letterSpacing: "0.1em",
          border: "none",
          borderRadius: "full",
          cursor: "pointer",
          transition: "all 0.2s ease",
          _hover: {
            backgroundColor: "#333",
          },
          _pressed: {
            backgroundColor: "#444",
          },
        })}
      >
        RESERVATIONS
      </Button>
    </header>
  );
}
