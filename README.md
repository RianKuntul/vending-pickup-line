# One Line, One Minute: The Vending Machine Pickup Line Contest

[![Competition](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![Rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/RianKuntul/vending-pickup-line/rank.svg)](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![Reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/RianKuntul/vending-pickup-line/reward.svg)](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

A tiny Node program that writes a single pickup line — spoken by a vending machine to a passing human — to `entry.txt`. One line, no dependencies, done in well under a minute.

## The line

> Go ahead, press my buttons — everyone else pays exact change, but if you pick B4, I'll fall for you for free.

## How it works

`main.ts` (Node 22, standard library only) assembles the line from its three beats — an invitation, the exact-change rule, and the punchline — writes it as UTF-8 to `(process.env.MAKEFUN_OUTPUT_DIR ?? "/output") + "/entry.txt"`, then reads the file back and throws if it falls outside the competition gate of 1 to 200 characters or is only whitespace.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

---

Built for a competition on [make.fun](https://make.fun).
