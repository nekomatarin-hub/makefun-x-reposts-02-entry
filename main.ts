// Entry deliverable for the make.fun bounty "makefun-x-reposts-02".
//
// The grader runs this file with MAKEFUN_OUTPUT_DIR pointing at the
// directory where deliverables must land. All this program does is copy
// POSTS.json (which sits next to this file) into that output directory,
// creating the directory first when it does not exist yet, and then print
// a short summary of what was delivered.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "POSTS.json");

// Validate the payload before delivering it: POSTS.json must parse, its
// "posts" field must be an array of 1-15 entries, and every entry must
// look like an x.com status URL. Fail loudly here rather than hand the
// grader a malformed file.
const STATUS_URL = /^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/\d+$/;

function loadPosts(path: string): string[] {
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(path, "utf8"));
  } catch {
    throw new Error(`POSTS.json at ${path} is not valid JSON.`);
  }
  const posts = (parsed as { posts?: unknown }).posts;
  if (!Array.isArray(posts) || posts.length < 1 || posts.length > 15) {
    throw new Error(
      `POSTS.json must list between 1 and 15 posts; got ${
        Array.isArray(posts) ? posts.length : "a non-array"
      }.`,
    );
  }
  for (const post of posts) {
    if (typeof post !== "string" || !STATUS_URL.test(post)) {
      throw new Error(`POSTS.json entry is not an x.com status URL: ${post}`);
    }
  }
  return posts as string[];
}

const expected = loadPosts(sourcePath);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const targetPath = join(outputDir, "POSTS.json");

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, targetPath);

// Re-read the delivered copy and confirm it carries the same posts that
// passed validation above, so a truncated or stale copy cannot slip by.
const delivered = loadPosts(targetPath);
if (delivered.join("\n") !== expected.join("\n")) {
  throw new Error("Delivered POSTS.json does not match the validated source.");
}

console.log(
  `Delivered POSTS.json to ${targetPath} (${delivered.length} posts).`,
);
