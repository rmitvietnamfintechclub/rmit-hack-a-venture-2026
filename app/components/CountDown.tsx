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
        borderBottom="4.12px solid #F7D27F"
        bgColor="#000000"
        className="box-shadow-lg"
        border="1px solid #91DAAE"
      >
        <Text
          fontWeight="normal"
          transform="translateY(50%)"
          color="#91DAAE"
          className="md:text-[200px] text-[50px]"
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
      bgColor="#000000"
      borderBottomRadius={18.51}
      className="box-shadow-lg"
      border="1px solid #91DAAE"
    >
      <Text
        fontWeight="semibold"
        transform="translateY(-50%)"
        color="#91DAAE"
        className="md:text-[200px] text-[50px]"
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
  >
);

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
        bgColor="#000000"
        className="box-shadow-lg"
        borderTopRadius={18.51}
        border="1px solid #91DAAE"
        onAnimationComplete={() => {
          setDisplayUnit(current);
          controls.set({ rotateX: 0 });
        }}
      >
        <Text
          fontWeight="semibold"
          transform="translateY(50%)"
          color="#91DAAE"
          className="md:text-[200px] text-[50px]"
        >
          {displayUnit}
        </Text>
      </MotionFlex>
    );
  }
);

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
      bgColor="#000000"
      className="box-shadow-lg"
      borderBottomRadius={18.51}
      border="1px solid #91DAAE"
    >
      <Text
        fontWeight="semibold"
        transform="translateY(-50%)"
        color="#91DAAE"
        className="md:text-[200px] text-[50px]"
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
        bgColor="#12161C"
        rounded="18.51px"
        className="md:w-[267px] md:h-[230px] max-md:w-[80px] max-md:h-[80px]"
        sx={{ perspective: "800px", perspectiveOrigin: "50% 50%" }}
      >
        <StaticCard position="upper" unit={current} />
        <StaticCard position="lower" unit={previous} />
        <UpperAnimatedCard current={current} previous={previous} />
        <BottomAnimatedCard unit={current} />
      </Box>

      {/* Text */}
      <Center py={20}>
        <Text
          className="md:text-4xl md:ml-0 ml-2 text-lg font-semibold"
          fontWeight="light"
          textTransform="uppercase"
          color="white"
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
  // When completed, we now return null, because the
  // parent component's title will change to the completed message.
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
  // 1. Add state to track completion
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  // 2. Create a handler for the onComplete event
  const handleComplete = () => {
    setIsCompleted(true);
  };

  return (
    <div className="mt-[30px] md:px-20 px-6">
      <h1
        className={`max-md:text-3xl md:text-[3.65rem] text-center md:leading-[5rem] text-color-gradient font-semibold drop-shadow-text`}
      >
        {/* 3. Conditionally render the title based on completion state */}
        {isCompleted ? "" : "Countdown before registration closes"}
      </h1>
      {isCompleted ? (
        <div 
            className="relative h-48 md:h-64 w-full p-px rounded-lg mb-12 md:mb-16"
            style={{
                background: "linear-gradient(to bottom, #F37D12, #FDE309)"
            }}
        >
          <div 
            className="flex flex-col items-center justify-center w-full h-full rounded-[7px] text-center"
            style={{
                background: "linear-gradient(to bottom, #10382C, #0A1B15)"
            }}
          >
            <IconSpeakerphone
              size={65}
              className="max-md:w-[50px] text-yellow-400 max-md:mb-2 md:mb-4 animate-pulse"
            />
            <h3 className="md:text-3xl max-md:text-2xl font-bold tracking-wider uppercase text-color-gradient">
              REGISTRATION HAS CLOSED!
            </h3>
          </div>
        </div>
      ) : (
        <ReactCountdown
          date={date}
          renderer={renderer}
          onComplete={handleComplete} // 4. Pass the handler to the component
        />
      )}
    </div>
  );
};