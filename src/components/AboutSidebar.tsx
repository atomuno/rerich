import type { AboutSidebarView } from "@/lib/cms/payload-queries";

export default function AboutSidebar({
  data,
  variant = "fund",
}: {
  data: AboutSidebarView;
  variant?: "fund" | "uriel";
}) {
  if (variant === "uriel") {
    return (
      <aside className="border-2 border-slate-900 p-6 bg-white sticky top-24">
        <h3 className="text-[11px] font-sans font-black uppercase tracking-[0.2em] mb-6 border-b-2 border-slate-900 pb-2">
          {data.sidebarTitle}
        </h3>
        <div className="space-y-6 text-sm">
          <div>
            <span className="text-[9px] uppercase font-bold text-slate-400 block mb-1">
              Юридический адрес
            </span>
            <p className="font-medium leading-tight text-slate-900">
              {data.address}
            </p>
          </div>
          <Requisites data={data} />
        </div>
      </aside>
    );
  }

  return (
    <aside className="border border-slate-200 p-6 bg-slate-50">
      <h3 className="text-[10px] font-sans font-black uppercase tracking-[0.2em] mb-6 text-slate-400 border-b pb-2">
        {data.sidebarTitle}
      </h3>
      <div className="space-y-5 text-sm">
        <div>
          <span className="text-[9px] uppercase font-bold text-slate-400 block">
            Адрес
          </span>
          <p className="leading-tight">{data.address}</p>
        </div>
        <Requisites data={data} fundStyle />
      </div>
    </aside>
  );
}

function Requisites({
  data,
  fundStyle,
}: {
  data: AboutSidebarView;
  fundStyle?: boolean;
}) {
  return (
    <div
      className={`font-mono text-[12px] ${fundStyle ? "pt-4 space-y-2 border-t border-slate-200" : "pt-6 space-y-3 border-t border-slate-100"}`}
    >
      <div className={`flex justify-between ${fundStyle ? "" : "items-center"}`}>
        <span className={fundStyle ? "" : "text-slate-400"}>ОГРН:</span>
        <span className="font-bold">{data.ogrn}</span>
      </div>
      <div className={`flex justify-between ${fundStyle ? "" : "items-center"}`}>
        <span className={fundStyle ? "" : "text-slate-400"}>ИНН:</span>
        <span className="font-bold">{data.inn}</span>
      </div>
      <div className={`flex justify-between ${fundStyle ? "" : "items-center"}`}>
        <span className={fundStyle ? "" : "text-slate-400"}>КПП:</span>
        <span className="font-bold">{data.kpp}</span>
      </div>
      <div
        className={`flex justify-between ${fundStyle ? "border-t border-dotted pt-2 mt-2" : "items-center border-t border-slate-900 pt-3 mt-3"}`}
      >
        <span
          className={
            fundStyle ? "" : "text-slate-400 font-sans uppercase text-[9px]"
          }
        >
          {fundStyle ? "ЗАРЕГ.:" : "Регистрация:"}
        </span>
        <span
          className={`font-bold ${fundStyle ? "text-blue-900" : "text-blue-900 tracking-tighter"}`}
        >
          {data.registeredAt}
        </span>
      </div>
    </div>
  );
}
