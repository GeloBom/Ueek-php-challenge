import { useEffect, useState } from "react";
import { fetchTestimonials, createTestimonial, deleteTestimonial } from "../services/testimonial";
import { Testimonial } from "../types/testimonial";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetchTestimonials().then(setTestimonials);
  }, []);

  const handleAdd = async () => {
    const newTestimonial: Testimonial = {
        name: "John", message: "Great service!",
        headerMensage: "Excellent!", image: null, 
        rating: 0
    };
    const created = await createTestimonial(newTestimonial);
    setTestimonials((prev) => [...prev, created]);
  };

  const handleDelete = async (id: number) => {
    await deleteTestimonial(id);
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Testimonials</h1>
      <button onClick={handleAdd}>Add Testimonial</button>
      <ul>
        {testimonials.map((t) => (
          <li key={t.id}>
            {t.message} {t.id !== undefined && <button onClick={() => t.id !== undefined && handleDelete(t.id)}>Delete</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}