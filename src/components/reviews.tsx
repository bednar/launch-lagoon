import * as React from "react";
import {queryConfig} from "../data/queries";

interface StarProps {
    color: string;
}

const Star: React.FC<StarProps> = ({color}) => {
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill={color}
    >
        <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
    </svg>)
}

interface ReviewProps {
    user: string;
    review: string;
    stars: number;
}

const Review: React.FC<ReviewProps> = ({user, review, stars}) => {
    let config = queryConfig();
    const starsArray = Array.from({ length: 5 }, (_, i) =>
        <Star key={i} color={i < stars ? "currentColor" : "grey"} />
    );
    return (<div className="mb-8 sm:break-inside-avoid">
        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
                <img
                    alt="Man"
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                    <div className={`flex justify-center gap-0.5 text-${config.primaryColor}`}>
                        {starsArray}
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-gray-900">{user}</p>
                </div>
            </div>
            <p className="mt-4 text-gray-700">{review}</p>
        </blockquote>
    </div>)
        ;
}
export const Reviews: React.FC = () => {
    return (<section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Read trusted reviews from our customers
            </h2>

            <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
                {<Review user={"Paul Starr"} review={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!"} stars={5}/>}
                {<Review user={"Tom Hack"} review={"Awesome..."} stars={4}/>}
                {<Review user={"Paul Starr"} review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit esse delectus, maiores fugit, reiciendis culpa inventore sint accusantium libero dolore eos quasi a exaliquam molestiae. Tenetur hic delectus maxime."} stars={3}/>}
                {<Review user={"Paul Starr"} review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit esse delectus, maiores fugit, reiciendis culpa inventore sint accusantium libero dolore eos quasi a exaliquam molestiae. Tenetur hic delectus maxime."} stars={5}/>}
                {<Review user={"Paul Starr"} review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, fuga?"} stars={5}/>}
                {<Review user={"Paul Starr"} review={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus  blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis."} stars={5}/>}
                {<Review user={"Paul Starr"} review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum. Nobis laborum praesentium necessitatibus vero."} stars={4}/>}
                {<Review user={"Paul Starr"} review={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quaerat quasi ipsa repellendus quam! Beatae pariatur quia distinctio fugit repellendus repudiandae nostrum consectetur quibusdam quo."} stars={5}/>}
                {<Review user={"Paul Starr"} review={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, modi!"} stars={4}/>}
                {<Review user={"Paul Starr"} review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam, unde molestiae commodi temporibus dicta."} stars={5}/>}
            </div>
        </div>
    </section>);
}
