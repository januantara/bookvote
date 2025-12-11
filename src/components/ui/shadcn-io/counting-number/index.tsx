'use client';

import {
  type SpringOptions,
  type UseInViewOptions,
  useInView,
  useMotionValue,
  useSpring,
} from 'motion/react';
import * as React from 'react';

export function formatCount(n: number): string {
  if (n < 1000) return n.toString();
  const rounded = Math.floor(n / 100) / 10;
  return rounded >= 10 ? Math.floor(rounded) + 'k+' : rounded + 'k+';
}

type CountingNumberProps = React.ComponentProps<'span'> & {
  number: number;
  fromNumber?: number;
  padStart?: boolean;
  inView?: boolean;
  inViewMargin?: UseInViewOptions['margin'];
  inViewOnce?: boolean;
  decimalSeparator?: string;
  transition?: SpringOptions;
  decimalPlaces?: number;
};

function CountingNumber({
  ref,
  number,
  fromNumber = 0,
  padStart = false,
  inView = false,
  inViewMargin = '0px',
  inViewOnce = true,
  decimalSeparator = '.',
  transition = { stiffness: 150, damping: 30 },
  decimalPlaces = 0,
  className,
  ...props
}: CountingNumberProps) {
  const localRef = React.useRef<HTMLSpanElement>(null);
  React.useImperativeHandle(ref, () => localRef.current as HTMLSpanElement);

  const numberStr = number.toString();
  const decimals =
    typeof decimalPlaces === 'number'
      ? decimalPlaces
      : numberStr.includes('.')
        ? (numberStr.split('.')[1]?.length ?? 0)
        : 0;

  const motionVal = useMotionValue(fromNumber);
  const springVal = useSpring(motionVal, transition);
  const inViewResult = useInView(localRef, {
    once: inViewOnce,
    margin: inViewMargin,
  });
  const isInView = !inView || inViewResult;

  React.useEffect(() => {
    if (isInView) motionVal.set(number);
  }, [isInView, number, motionVal]);

  React.useEffect(() => {
    const unsubscribe = springVal.on('change', (latest) => {
      if (localRef.current) {
        const roundedLatest = Math.round(latest);
        localRef.current.textContent = formatCount(roundedLatest);
      }
    });
    return () => unsubscribe();
  }, [springVal]);

  const finalIntLength = Math.floor(Math.abs(number)).toString().length;
  const initialText = padStart
    ? '0'.padStart(finalIntLength, '0') +
    (decimals > 0 ? decimalSeparator + '0'.repeat(decimals) : '')
    : '0' + (decimals > 0 ? decimalSeparator + '0'.repeat(decimals) : '');

  return (
    <span
      ref={localRef}
      data-slot="counting-number"
      className={className}
      {...props}
    >
      {initialText}
    </span>
  );
}

export { CountingNumber, type CountingNumberProps };