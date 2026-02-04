import type { InvitationData } from "../../types";

type Props = {
  data: InvitationData;
};

export function InvitationPreview({ data }: Props) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg">
      {/* Card */}
      <div className="bg-[#1F513A] p-6 text-white min-h-[420px]">
        
        {/* Badge */}
        {data.subFamily && (
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold rounded-full bg-yellow-400 text-[#1F513A]">
            {data.subFamily.toUpperCase()}
          </span>
        )}

        {/* Title */}
        <h1 className="text-3xl font-serif font-bold mb-2">
          {data.title || "Your Event Title"}
        </h1>

        {/* Description */}
        <p className="text-sm text-white/80 mb-8">
          {data.agenda || "Event description will appear here..."}
        </p>

        {/* Footer */}
        <div className="border-t border-white/20 pt-4 mt-6 space-y-2 text-sm">
          <div>
            <span className="font-semibold">DATE:</span>{" "}
            {data.date || "Not specified"}
          </div>
          <div>
            <span className="font-semibold">TIME:</span>{" "}
            {data.time || "Not specified"}
          </div>
          <div>
            <span className="font-semibold">LOCATION:</span>{" "}
            {data.location || "Not specified"}
          </div>
        </div>
      </div>
    </div>
  );
}
