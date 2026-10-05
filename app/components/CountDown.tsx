"use client";
import {
  Box,
  Center,
  Flex,
  FlexProps,
  HStack,
  MergeWithAs,
  Text,
} from "@chakra-ui/react";
import { motion, useAnimationControls } from "framer-motion";
import {
  DetailedHTMLProps,
  ForwardRefExoticComponent,
  HTMLAttributes,
  memo,
  useEffect,
  useMemo,
  useState,
} from "react";
import ReactCountdown from "react-countdown";
import { IconSpeakerphone } from "@tabler/icons-react";
import type { CountdownProps, CountdownRendererFn } from "react-countdown";

const StaticCard = ({
  position,
  unit,
}: {
  position: "upper" | "lower";
  unit: number | string;
}) => {
  if (position === "upper") {
    return (
      <Flex
        pos="relative"
        justifyContent="center"
        w="100%"
        h="50%"
        overflow="hidden"
        alignItems="flex-end"
        borderTopRadius={18.51}
        borderBottom="2px solid rgba(232, 81, 2, 0.4)" // Đường cắt ngang màu Cam mờ
        bgColor="#140505" // Nền Đỏ mận tối
        border="1px solid rgba(191, 7, 1, 0.4)" // Viền Đỏ mờ
      >
        <Text
          fontWeight="bold"
          transform="translateY(50%)"
          color="#e85102" // Số màu Cam
          className="md:text-[200px] text-[50px] drop-shadow-text" // Thêm glow chữ
        >
          {unit}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      pos="relative"
      justifyContent="center"
      w="100%"
      h="50%"
      overflow="hidden"
      alignItems="flex-start"
      bgColor="#140505"
      borderBottomRadius={18.51}
      border="1px solid rgba(191, 7, 1, 0.4)"
      borderTop="none" // Bỏ viền trên để không bị nét đôi ở giữa
    >
      <Text
        fontWeight="bold"
        transform="translateY(-50%)"
        color="#e85102"
        className="md:text-[200px] text-[50px] drop-shadow-text"
      >
        {unit}
      </Text>
    </Flex>
  );
};

export const MotionFlex = motion.create(
  Flex as ForwardRefExoticComponent<
    MergeWithAs<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      any,
      FlexProps
    >
  >,
);

// CẬP NHẬT UI: Mặt thẻ đang lật (Nửa trên)
const UpperAnimatedCard = memo(
  ({
    current,
    previous,
  }: {
    current: number | string;
    previous: number | string;
  }) => {
    const [displayUnit, setDisplayUnit] = useState(previous);
    const controls = useAnimationControls();

    useEffect(() => {
      controls.start({
        rotateX: [0, -180],
        transition: { duration: 0.9, ease: "easeInOut" },
      });
      setDisplayUnit(previous);
    }, [previous]);

    return (
      <MotionFlex
        id="upper-animated-card"
        animate={controls}
        justifyContent="center"
        pos="absolute"
        w="100%"
        h="50%"
        overflow="hidden"
        sx={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
        top={0}
        alignItems="flex-end"
        transformOrigin="50% 100%"
        transform="rotateX(0deg)"
        bgColor="#140505"
        borderTopRadius={18.51}
        border="1px solid rgba(191, 7, 1, 0.4)"
        onAnimationComplete={() => {
          setDisplayUnit(current);
          controls.set({ rotateX: 0 });
        }}
      >
        <Text
          fontWeight="bold"
          transform="translateY(50%)"
          color="#e85102"
          className="md:text-[200px] text-[50px] drop-shadow-text"
        >
          {displayUnit}
        </Text>
      </MotionFlex>
    );
  },
);

// CẬP NHẬT UI: Mặt thẻ đang lật (Nửa dưới)
const BottomAnimatedCard = ({ unit }: { unit: number | string }) => {
  const [displayUnit, setDisplayUnit] = useState(unit);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      rotateX: [180, 0],
      transition: { duration: 0.9, ease: "easeInOut" },
    });
    setDisplayUnit(unit);
  }, [unit]);

  return (
    <MotionFlex
      id="animated-card"
      animate={controls}
      justifyContent="center"
      pos="absolute"
      left={0}
      w="100%"
      h="50%"
      overflow="hidden"
      sx={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
      top="50%"
      alignItems="flex-start"
      transformOrigin="50% 0%"
      transform="rotateX(180deg)"
      bgColor="#140505"
      borderBottomRadius={18.51}
      border="1px solid rgba(191, 7, 1, 0.4)"
      borderTop="none"
    >
      <Text
        fontWeight="bold"
        transform="translateY(-50%)"
        color="#e85102"
        className="md:text-[200px] text-[50px] drop-shadow-text"
      >
        {displayUnit}
      </Text>
    </MotionFlex>
  );
};

const FlipContainer = ({
  number,
  title,
}: {
  number: number;
  title: "days" | "hours" | "mins" | "secs";
}) => {
  const { current, previous } = useMemo(() => {
    const currentDigit = number;
    const previousDigit = number + 1;

    const current =
      currentDigit < 10
        ? `0${currentDigit}`
        : (title === "secs" || title === "mins") && currentDigit === 60
          ? "00"
          : currentDigit;
    const previous =
      previousDigit < 10
        ? `0${previousDigit}`
        : (title === "secs" || title === "mins") && previousDigit === 60
          ? "00"
          : previousDigit;

    return { current, previous };
  }, [number]);

  return (
    <Box className="cols-span-1">
      <Box
        display="block"
        pos="relative"
        bgColor="transparent" // Bỏ màu nền xanh cũ, để transparent
        rounded="18.51px"
        className="md:w-[267px] md:h-[230px] max-md:w-[80px] max-md:h-[80px] shadow-[0_15px_40px_rgba(191,7,1,0.2)]" // Thêm shadow hắt sáng đỏ
        sx={{ perspective: "800px", perspectiveOrigin: "50% 50%" }}
      >
        <StaticCard position="upper" unit={current} />
        <StaticCard position="lower" unit={previous} />
        <UpperAnimatedCard current={current} previous={previous} />
        <BottomAnimatedCard unit={current} />
      </Box>

      {/* Text Label dưới số */}
      <Center py={20}>
        <Text
          className="md:text-4xl md:ml-0 ml-2 text-lg font-bold tracking-widest"
          textTransform="uppercase"
          color="#a1a1aa" // Chuyển từ trắng sang xám nhạt để focus ánh nhìn vào số
        >
          {title}
        </Text>
      </Center>
    </Box>
  );
};

const renderer: CountdownRendererFn = ({
  hours,
  minutes,
  seconds,
  completed,
  days,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) return null;

  return (
    <Center>
      <HStack>
        <div className="grid grid-cols-4 gap-4 mt-[30px] max-md:gap-x-[15px]">
          <FlipContainer number={days} title="days" />
          <FlipContainer number={hours} title="hours" />
          <FlipContainer number={minutes} title="mins" />
          <FlipContainer number={seconds} title="secs" />
        </div>
      </HStack>
    </Center>
  );
};

// --- MODIFIED COMPONENT ---
export const Countdown = ({ date }: Pick<CountdownProps, "date">) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const handleComplete = () => {
    setIsCompleted(true);
  };

  return (
    <div className="my-8 md:my-20 md:px-20 px-6 relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#e85102] rounded-[100%] blur-[180px] opacity-10 pointer-events-none"></div>

      <h1 className="text-4xl md:text-[3.55rem] text-center leading-tight md:leading-tight text-white font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] md:mb-8">
        {isCompleted ? (
          ""
        ) : (
          <>
            <span className="drop-shadow-text">Countdown before </span><br className="md:hidden" />
            <span className="text-color-gradient drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]">registration closes</span>
          </>
        )}
      </h1>

      {isCompleted ? (
        <div
          className="relative h-48 md:h-64 w-full p-[2px] rounded-2xl mb-12 md:mb-16 shadow-[0_15px_50px_rgba(191,7,1,0.3)] mt-8"
          style={{
            background: "linear-gradient(to right, #bf0701, #e85102)",
          }}
        >
          <div
            className="flex flex-col items-center justify-center w-full h-full rounded-[14px] text-center px-4"
            style={{
              background: "linear-gradient(to bottom, #140505, #080303)",
            }}
          >
            <IconSpeakerphone
              size={70}
              className="max-md:w-[50px] text-[#e85102] max-md:mb-2 md:mb-6 animate-pulse drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]"
            />
            <h3 className="md:text-4xl max-md:text-2xl font-black tracking-wider uppercase text-color-gradient drop-shadow-text">
              REGISTRATION HAS CLOSED!
            </h3>
            <p className="mt-3 text-gray-400 font-medium text-lg">
              Thank you for your overwhelming interest in Hack-A-Venture 2026.
            </p>
          </div>
        </div>
      ) : (
        <ReactCountdown
          date={date}
          renderer={renderer}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
};
