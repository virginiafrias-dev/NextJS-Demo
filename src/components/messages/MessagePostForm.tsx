"use client";

import useMessages from "@/contexts/message.context";
import messageAPI from "@/services/messages/message.service";
import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type MessagePostFormType = {
  parentId?: string;
};

type FormData = {
  message: string;
  parentId?: string;
};

const MessagePostForm = ({ parentId }: MessagePostFormType) => {
  const { postMessage } = useMessages();

  const { register, handleSubmit, resetField, setFocus } = useForm<FormData>();

  useEffect(() => {
    setFocus("message");
  }, [setFocus]);

  const onSubmit = async (data: FormData) => {
    await postMessage(data.message, parentId);
    resetField("message");
    setFocus("message");
  };

  // "https://i.pinimg.com/564x/1b/2d/c0/1b2dc0ce77080e4a682fbbfd2eb3b0c1.jpg";
  return (
    <div className=" mb-4 grid grid-cols-12">
      <div className="w-full h-full mt-1 text-center block relative w-20 h-20 col-span-2 flex items-center justify-center">
        <Image
          className="rounded-full"
          src={
            "https://i.pinimg.com/564x/1b/2d/c0/1b2dc0ce77080e4a682fbbfd2eb3b0c1.jpg"
          }
          alt={""}
          width={60}
          height={60}
          priority
        />
      </div>
      <div className="flex flex-col ml-4 mt-2 col-span-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            rows={4}
            placeholder="¿Qué estas pensando?..."
            className="resize-none p-4 w-full mb-4 rounded bg-gray-50 border border-gray-200"
            {...register("message", {
              required: true,
            })}
          />
          <div className="flex justify-end">
            <button
              className="button-primary w-fit uppercase font-semibold"
              // onClick={handleSubmit(onSubmit)} or => type="submit"
              type="submit"
            >
              Postear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessagePostForm;
