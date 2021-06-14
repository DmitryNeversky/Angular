import {animate, query, style, transition, trigger} from "@angular/animations";

export const fadeInOutAnimation =
    trigger('routeAnimations', [
        transition('* => *', [

            query(':enter, :leave', style({
                position: 'absolute', width: '100%',
            }), {optional: true}),

            query(':enter',
                [
                    style({opacity: 0})
                ],
                {optional: true}
            ),

            query(':leave',
                [
                    style({opacity: 1}),
                    animate('0.5s', style({opacity: 0}))
                ],
                {optional: true}
            ),

            query(':enter',
                [
                    style({opacity: 0}),
                    animate('0.5s', style({opacity: 1}))
                ],
                {optional: true}
            )

        ])
    ]);