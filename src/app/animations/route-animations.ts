import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

// cretae an animation where the component fade into to the page
export const fader = trigger("routeAnimation", [
    transition("* <=> *", [
        query(":enter, :leave", [
            style({
                position: "absolute",
                left: 0,
                width: "100%",
                opacity: 0,
                transform: "scale(0) translateY(100%)"
            }),
        ]),
        query(":enter", [
            animate("600ms ease",
                style({
                    opacity: 1, 
                    transform: "scale(1) translateY(0)"
                })
            ),
        ]),
    ]),
])

// Create an animation where the component slide right or left on the page based on 
// the data passed on the routing module
// {path: "login", component: LoginComponent, data: { animation: "isLeft" }}
export const slider = trigger("routeAnimation", [
    transition("* => isLeft", slideTo("left")),
    transition("* => isRight", slideTo("right")),
    transition("isRight => *", slideTo("left")),
    transition("isLeft => *", slideTo("right")),
])

function slideTo(direction) {
    const optional = { optional: true };
    return [
        query(":enter, :leave", [
            style({
                position: "absolute",
                top: 0,
                [direction]: 0, 
                width: "100%"
            })
        ], optional),
        query(":enter", [
            style({[direction]: "-100%"})
        ]),
        group([
            query(":leave", [
                animate("600ms ease", style({ [direction]: "100%" }))
            ], optional),
            query(":enter", [
                animate("600ms ease", style({ [direction]: "0%" }))
            ]),
        ]),
    ];
}