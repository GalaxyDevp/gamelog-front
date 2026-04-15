import { NumberInput, Select, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Heart } from "lucide-react";

interface Game {
  id: number;
  title: string;
  status: string;
  img: string;
  developer: string[];
  releaseDate: string;
  genres: string[];
  platforms: string[];
  favorite: boolean;
}

type props = {
  selectedGame: Game | null;
};

const FormAddGame = ({ selectedGame }: props) => {
  const items = [
    { id: 1, label: "Playing" },
    { id: 2, label: "Completed" },
    { id: 3, label: "Backlog" },
    { id: 4, label: "On Hold" },
    { id: 5, label: "Dropped" },
  ];

  const form = useForm({
    initialValues: {
      game: "",
      status: "",
      platform: "",
    },
    validate: {
      game: (value) => (value ? null : "Game is required"),
      status: (value) => (value ? null : "Status is required"),
      platform: (value) => (value ? null : "Platform is required"),
    },
  });

  const onSubmit = (data: { status: string; platform: string }) => {
    const dat = {
      ...data,
    };
    console.log("submit", dat);
  };
  return (
    <>
      {selectedGame && (
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-center items-center px-3 gap-2">
            <img src={selectedGame.img} alt="" className="w-32" />
            <div className="flex flex-col text-black dark:text-white">
              <p className="font-bold text-center">{selectedGame.title}</p>
            </div>
            <button className="border border-gray-300 hover:bg-red-200/30 dark:border-gray-700 px-2 py-1 rounded-xl">
              <p className="flex items-center gap-2 text-black dark:text-white">
                <Heart
                  className={`w-5 h-5 ${selectedGame.favorite ? "fill-red-700" : ""} text-red-700`}
                />
                Like
              </p>
            </button>
          </div>
          <form
            className="flex flex-col gap-2"
            onSubmit={form.onSubmit(onSubmit)}
          >
            <Select
              label="Status"
              radius="lg"
              placeholder="Status"
              data={items.map((item) => ({
                value: item.id,
                label: item.label,
              }))}
              {...form.getInputProps("status")}
            />

            <Select
              label="Platform"
              radius="lg"
              placeholder="Platform"
              data={selectedGame.platforms.map((item) => item)}
              {...form.getInputProps("platform")}
            />
            <NumberInput
              radius="lg"
              label="Score"
              placeholder="Score"
              min={0}
              max={10}
              {...form.getInputProps("rating")}
            />
            <Textarea
              radius="lg"
              label="Review"
              placeholder="Write your review"
              {...form.getInputProps("review")}
            />

            <div className="flex gap-2 pt-4">
              <button
                type="submit"
                className="bg-violet-500 w-full py-2 px-4 rounded-xl text-white hover:bg-violet-600 dark:bg-purple-800 
                    dark:text-purple-200 cursor-pointer dark:hover:bg-purple-700 dark:hover:text-purple-200"
              >
                Agregar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default FormAddGame;
