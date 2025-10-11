export function truncateText(text: string, maxWords: number): string {
  // Split text into words, handling multiple spaces and newlines
  const words = text.trim().split(/\s+/);
  
  // If the text has fewer words than maxWords, return it as is
  if (words.length <= maxWords) {
    return text;
  }
  
  // Take the first maxWords and join them, adding ellipsis
  return `${words.slice(0, maxWords).join(' ')}...`;
}