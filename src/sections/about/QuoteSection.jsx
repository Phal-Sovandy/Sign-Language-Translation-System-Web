export default function QuoteSection() {
  return (
    <section className="py-16">
      <div className="max-w-[1700px] mx-auto px-8">
        <div className="max-w-[1300px] mx-auto">
          <div className="relative pl-16">
            {/* Quote mark */}
            <span className="absolute left-[-10px] lg:left-[-40px] top-[-20px] lg:top-[-30px] text-white/20 drop-shadow-[0_4px_20px_rgba(255,255,255,0.3)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="68"
                height="68"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10m11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10"
                />
              </svg>
            </span>

            {/* Quote text */}
            <p className="font-heading text-3xl lg:text-3xl text-[#C6C6C6] leading-relaxed drop-shadow-lg">
              <span
                className="text-white italic font-semibold text-4xl drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
                style={{ fontFamily: '"CormorantInfant", serif' }}
              >
                We're building a smarter way to translate Khmer sign language
              </span>{" "}
              using AI and web technology. Our system blends real-time
              performance, accessibility, and accuracy to turn gestures into
              meaningful communication for learning and everyday use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

