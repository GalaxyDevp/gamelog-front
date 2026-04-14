import { Autocomplete, Select } from "@mantine/core";
import { useForm } from "@mantine/form";

const FormAddGame = () => {
  const items = [
    { id: 1, label: "Playing" },
    { id: 2, label: "Completed" },
    { id: 3, label: "Backlog" },
  ];
  const platforms = [
    { id: 1, label: "PC" },
    { id: 2, label: "PS5" },
    { id: 3, label: "Xbox" },
    { id: 4, label: "Nintendo Switch" },
  ];

  const form = useForm({
    initialValues: {
      status: "",
      platform: "",
    },
    validate: {
      status: (value) => (value ? null : "Status is required"),
      platform: (value) => (value ? null : "Platform is required"),
    },
  });

  const onSubmit = (data: { status: string; platform: string }) => {
    console.log("submit", data);
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={form.onSubmit(onSubmit)}>
      <div className=" flex flex-col gap-4">
        {/* 
      <div className="flex flex-row items-center gap-4">
          <img src={preload} alt="" className="w-30 h-40" />
          <div className="flex flex-col text-black dark:text-white">
            <p className="text-lg font-bold">Persona 3 Reload</p>
            <p>
              by <span className="font-semibold">P Studio</span>,
              <span className="font-semibold"> Atlus</span>
            </p>
            <p className="text-sm text-pretty">
              Step into the shoes of a transfer student thrust into an
              unexpected fate when entering the hour "hidden" between one day
              and the next. Awaken an incredible power and chase the mysteries
              of the Dark Hour, fight for your friends, and leave a mark on
              their memories forever. Persona 3 Reload is a captivating
              reimagining of the genre-defining RPG, reborn for the modern era.
            </p>
          </div>
        </div>
      */}
        <Autocomplete
          label="Game"
          placeholder="Search game"
          limit={5}
          data={["Persona 3 Reload", "Persona 5 Royal", "9Rip", "Illusion of Itehari"]}
        />
        <Select
          label="Status"
          placeholder="Status"
          data={items.map((item) => item.label)}
          {...form.getInputProps("status")}
        />

        <Select
          label="Platform"
          placeholder="Platform"
          data={platforms.map((item) => item.label)}
          {...form.getInputProps("platform")}
        />
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-violet-500 py-2 px-4 rounded-xl text-white hover:bg-violet-600 dark:bg-purple-800 
            dark:text-purple-200 cursor-pointer dark:hover:bg-purple-700 dark:hover:text-purple-200"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};
export default FormAddGame;
