import React from "react";
import {
  BookOpen,
  TrendingUp,
  Bookmark,
  Target,
} from "lucide-react";

const ReadingStatsSection = () => {
  const progress = 90;

  return (
    <section className="w-full bg-[#faf9f6] py-12 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <StatCard
          icon={<BookOpen className="h-5 w-5 text-emerald-700" />}
          title="Books Read"
          value="47"
          subtitle="This year"
        />

        {/* Card 2 */}
        <StatCard
          icon={<TrendingUp className="h-5 w-5 text-amber-700" />}
          title="Pages Read"
          value="12,847"
          subtitle="Keep it up!"
        />

        {/* Card 3 */}
        <StatCard
          icon={<Bookmark className="h-5 w-5 text-yellow-600" />}
          title="Currently Reading"
          value="3"
          subtitle="In progress"
        />

        {/* Card 4 – Progress */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
              <Target className="h-5 w-5 text-emerald-700" />
            </div>
            <h4 className="font-medium text-gray-800">
              Reading Goal
            </h4>
          </div>

          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>47 / 52</span>
            <span className="font-semibold">{progress}%</span>
          </div>

          <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-emerald-700 transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-3 text-sm text-gray-500">
            5 books to go!
          </p>
        </div>

      </div>
    </section>
  );
};

export default ReadingStatsSection;

/* ---------- Reusable Card ---------- */
interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  subtitle,
}) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
          {icon}
        </div>
        <h4 className="font-medium text-gray-800">{title}</h4>
      </div>

      <div className="text-2xl font-semibold text-gray-900">
        {value}
      </div>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};
