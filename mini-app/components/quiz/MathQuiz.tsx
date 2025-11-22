"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MathQuiz() {
  const [num1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2] = useState(Math.floor(Math.random() * 10) + 1);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = num1 + num2;
    if (parseInt(answer, 10) === correct) {
      setResult("Correct!");
    } else {
      setResult(`Incorrect. The correct answer is ${correct}.`);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label className="text-lg">
          What is {num1} + {num2}?
        </label>
        <Input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-32"
          required
        />
        <Button type="submit" variant="outline">
          Submit
        </Button>
      </form>
      {result && <p className="text-lg">{result}</p>}
    </div>
  );
}
