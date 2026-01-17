import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Trash2, LogOut, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import type { User, Session } from "@supabase/supabase-js";

interface LogEntry {
  id: string;
  entry_date: string;
  description: string;
  created_at: string;
}

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [entryDate, setEntryDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [loading, user, navigate]);

  const { data: entries } = useQuery({
    queryKey: ["log-entries-admin"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("log_entries")
        .select("*")
        .order("entry_date", { ascending: false });
      
      if (error) throw error;
      return data as LogEntry[];
    },
    enabled: !!user,
  });

  const addMutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from("log_entries").insert({
        entry_date: entryDate,
        description: description.trim(),
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["log-entries"] });
      queryClient.invalidateQueries({ queryKey: ["log-entries-admin"] });
      setDescription("");
      toast({ title: "Entry added" });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to add entry",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("log_entries").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["log-entries"] });
      queryClient.invalidateQueries({ queryKey: ["log-entries-admin"] });
      toast({ title: "Entry deleted" });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to delete entry",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) {
      toast({
        title: "Please enter a description",
        variant: "destructive",
      });
      return;
    }
    addMutation.mutate();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="text-muted-foreground">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-8">Living Log — Admin</h1>

        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="text-lg">Add New Entry</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={entryDate}
                  onChange={(e) => setEntryDate(e.target.value)}
                  className="max-w-xs"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Used AI to reframe a complex leadership update into a clear narrative"
                  rows={3}
                />
              </div>
              <Button type="submit" disabled={addMutation.isPending}>
                {addMutation.isPending ? "Adding..." : "Add Entry"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <h2 className="text-lg font-semibold mb-4">Existing Entries</h2>
        
        {entries && entries.length > 0 ? (
          <ul className="space-y-3">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className="flex items-start justify-between gap-4 p-4 bg-card border border-border rounded-lg"
              >
                <div className="flex gap-4 items-start flex-1">
                  <span className="text-sm text-muted-foreground font-mono shrink-0 pt-0.5">
                    {format(new Date(entry.entry_date), "MMM d")}
                  </span>
                  <span className="text-foreground leading-relaxed">
                    {entry.description}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteMutation.mutate(entry.id)}
                  disabled={deleteMutation.isPending}
                  className="shrink-0 text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground italic">No entries yet.</p>
        )}
      </main>
    </div>
  );
};

export default Admin;
