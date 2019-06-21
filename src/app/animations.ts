import { animationFrameScheduler, interval, Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

export const EasingFunctions = {
  // no easing, no acceleration
  linear(t: number): number {
    return t;
  },
  // accelerating from zero velocity
  // easeInQuad: function (t: number): number {
  //     return t * t;
  // },
  // // decelerating to zero velocity
  // easeOutQuad: function (t: number): number {
  //     return t * (2 - t);
  // },
  // acceleration until halfway, then deceleration
  easeInOutQuad(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // // accelerating from zero velocity
  // easeInCubic: function (t: number): number {
  //     return t * t * t;
  // },
  // // decelerating to zero velocity
  // easeOutCubic: function (t: number): number {
  //     return --t * t * t + 1;
  // },
  // // acceleration until halfway, then deceleration
  // easeInOutCubic: function (t: number): number {
  //     return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  // },
  // // accelerating from zero velocity
  // easeInQuart: function (t: number): number {
  //     return t * t * t * t;
  // },
  // // decelerating to zero velocity
  // easeOutQuart: function (t: number): number {
  //     return 1 - --t * t * t * t;
  // },
  // // acceleration until halfway, then deceleration
  // easeInOutQuart: function (t: number): number {
  //     return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  // },
  // // accelerating from zero velocity
  // easeInQuint: function (t: number): number {
  //     return t * t * t * t * t;
  // },
  // // decelerating to zero velocity
  // easeOutQuint: function (t: number): number {
  //     return 1 + --t * t * t * t * t;
  // },
  // // acceleration until halfway, then deceleration
  // easeInOutQuint: function (t: number): number {
  //     return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  // }
};

const animationFrame$ = interval(0, animationFrameScheduler);

/**
 *
 * @param duration how long to run the animation for
 * @param ease the easing function
 * @returns the value emitted is between zero and one.
 */
export function createAnimation(duration: number, ease = EasingFunctions.linear): Observable<number> {
  const start = Date.now();
  let sentOne = false;

  return animationFrame$.pipe(
    map(() => Math.floor(Date.now() - start)),
    map(elapsed => elapsed / duration),
    map(t => {
      if (sentOne) {
        return 2;
      }

      if (t >= 1) {
        t = 1;
        sentOne = true;
      }
      return t;
    }),
    takeWhile(t => t !== 2),
    map(ease)
  );
}
