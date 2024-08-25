declare module "sentiment" {
  class Sentiment {
    analyze(text: string): {
      score: number;
      comparative: number;
      calculation: Array<{ [word: string]: number }>;
      tokens: string[];
      words: string[];
      positive: string[];
      negative: string[];
    };
  }
  export default Sentiment;
}
