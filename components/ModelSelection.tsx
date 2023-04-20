"use client";
import Select from "react-select";
import useSWR from "swr";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());
function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinic-003",
  });
  return (
    <div className="mt-2">
      <Select
        className="mt-2"
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
        placeholder={model}
        value={model}
        options={models?.modelOptions}
        onChange={(e: any) => setModel(e.value)}
      />
    </div>
  );
}

export default ModelSelection;
