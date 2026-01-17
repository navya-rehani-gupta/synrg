import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";

interface LogEntry {
  id: string;
  entry_date: string;
  description: string;
  created_at: string;
}

const LivingLog = () => {
  const { data: entries, isLoading } = useQuery({
    queryKey: ["log-entries"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("log_entries")
        .select("*")
        .order("entry_date", { ascending: false });
      
      if (error) throw error;
      return data as LogEntry[];
    },
  });

  return (
    <section className="py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Living log</h2>
      <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
        This is a lightweight, evolving record of real use.
      </p>

      <div className="max-w-2xl">
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 items-start">
                <Skeleton className="w-20 h-5" />
                <Skeleton className="flex-1 h-5" />
              </div>
            ))}
          </div>
        ) : entries && entries.length > 0 ? (
          <ul className="space-y-4">
            {entries.map((entry) => (
              <li key={entry.id} className="flex gap-4 items-start group">
                <span className="text-sm text-muted-foreground font-mono shrink-0 pt-0.5">
                  {format(new Date(entry.entry_date), "MMM d")}
                </span>
                <span className="text-foreground leading-relaxed">
                  {entry.description}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground italic">
            No entries yet. This page will continue to evolve as my operating system evolves.
          </p>
        )}
      </div>

      <p className="text-sm text-muted-foreground mt-10 max-w-2xl">
        This page will continue to evolve as my operating system evolves.
      </p>
    </section>
  );
};

export default LivingLog;
