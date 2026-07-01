/** 

1) This component is trying to do too much, resulting in a confusing developer experience. If type="badge", the streakDays prop shouldn't be allowed, but badgeName should be strictly required. Refactor MilestoneCardProps to use a TypeScript Discriminated Union to enforce these rules at compile time.
TypeScript

*/

// ❌ HALF-BAKED IMPLEMENTATION

type MilestoneCardProps =
  | {
      type: "badge";
      title: string;
      badgeName: string;
      themeColor: "#7C3AED";
    }
  | {
      type: "streak";
      title: string;
      streakDays: number;
      themeColor: "#14B8A6";
    }
  | {
      type: "chore";
      title: string;
      choreStatus: "pending" | "completed";
      themeColor: "#F97316";
    };

// {
//   type: "badge" | "streak" | "chore";

//   title: string;

//   // These props are currently a mess of optionals:
//   badgeName?: string;
//   streakDays?: number;
//   choreStatus?: "pending" | "completed";

//   themeColor?: "#7C3AED" | "#14B8A6" | "#F97316" | "#FBBF24";
// };

export const MilestoneCard = (props: MilestoneCardProps) => {
  return (
    <div style={{ borderColor: props.themeColor || "#14B8A6" }}>
      <h2>{props.title}</h2>
      {/* Implementation details omitted */}
    </div>
  );
};
