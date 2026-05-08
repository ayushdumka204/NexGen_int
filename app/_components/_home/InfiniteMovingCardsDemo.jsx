"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="min-h-screen py-16 bg-[var(--color-background)] flex flex-col items-center justify-center overflow-hidden">
      {/* HEADING */}
      <div className="text-center mb-12 px-4 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          <span className="text-[var(--color-primary)]">What Our </span>
          <span className="text-[var(--color-accent)]">Clients Say</span>
        </h2>

        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-px w-10 bg-[var(--color-border)]" />
          <div className="h-[3px] w-16 rounded-full bg-[var(--color-accent)]" />
          <div className="h-px w-10 bg-[var(--color-border)]" />
        </div>

        <p className="text-sm md:text-base text-black">
          Real feedback from clients who trusted us with their vision.
        </p>
      </div>

      {/* SLIDER */}
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I have reviewed the dataset and found it very useful for the analysis. I would like to sincerely thank you for your valuable support in helping me collect the data for my work.",
    name: "Sonali Jain",
    // title: "A Tale of Two Cities",
  },
  // {
  //   quote:
  //     "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
  //   name: "William Shakespeare",
  //   title: "Hamlet",
  // },
  // {
  //   quote: "All that we see or seem is but a dream within a dream.",
  //   name: "Edgar Allan Poe",
  //   title: "A Dream Within a Dream",
  // },
  // {
  //   quote:
  //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //   name: "Jane Austen",
  //   title: "Pride and Prejudice",
  // },
  // {
  //   quote:
  //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  // },
];
