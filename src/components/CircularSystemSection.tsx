import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function CircularSystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Circle points for the circular flow
  const circlePoints = [
    {
      color: "#9B59B6", // Purple
      label:
        "Repeat customer investment in Threestones Fire and Threestone's credit",
      position: { x: 59, y: 15 }, // Top
      labelPosition: { x: 50, y: -5 },
    },
    {
      color: "#C96A45", // Clay Red (matching site theme)
      label: "Threestones Fire operator produces Threestones credit.",
      position: { x: 85, y: 59 }, // Right
      labelPosition: { x: 95, y: 35 },
    },
    {
      color: "#E2A037", // Gold (matching site theme)
      label:
        "Immediate human to human video verification of Threestones credits",
      position: { x: 41, y: 84.5 }, // Bottom
      labelPosition: { x: 50, y: 95 },
    },
    {
      color: "#2E5339", // Forest Green (matching site theme)
      label: "Customer receives video",
      position: { x: 15, y: 41 }, // Left
      labelPosition: { x: 5, y: 35 },
    },
  ];

  // Linear points for UN Net Zero system
  const linearPoints = [
    {
      color: "#9B59B6", // Purple
      label:
        "UN Net Zero approved company invests in cook stone distribution and maintenance",
      position: { x: 12.5, y: 20 },
    },
    {
      color: "#C96A45", // Clay Red
      label: "Threestone fire operator produces carbon credits",
      position: { x: 37.5, y: 20 },
    },
    {
      color: "#E2A037", // Gold
      label: "UN net zero system approved verification",
      position: { x: 62.5, y: 20 },
    },
    {
      color: "#2E5339", // Forest Green
      label:
        "UN net zero approved carbon credits sold to company, profit and investment extracted",
      position: { x: 87.5, y: 20 },
    },
  ];

  return (
    <section
      id="circular-system"
      className="relative py-24 bg-gradient-to-b from-[#1a1a1a] via-[var(--charcoal)] to-[#2a2a2a] overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[var(--gold)] mb-4">
            Threestones Company System vs Mandatory UN Net Zero System
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Comparison of the open circular regenerative system
          </p>
        </motion.div>

        {/* Circular Diagram */}
        <motion.div
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-full" style={{ paddingBottom: "100%" }}>
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              style={{
                filter: "drop-shadow(0 0 20px rgba(226, 160, 55, 0.3))",
              }}
            >
              {/* Central circle with text */}
              <circle
                cx="50"
                cy="50"
                r="12"
                fill="transparent"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="0.2"
              />

              {/* Circular arrow path */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="4"
                  markerHeight="4"
                  refX="3.5"
                  refY="2"
                  orient="auto"
                  fill="#3B82F6"
                >
                  <polygon points="0 0, 4 2, 0 4" />
                </marker>
              </defs>

              {/* Main circular path with arrows */}
              <motion.path
                d="M 50 15 A 35 35 0 0 1 85 50"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="0.8"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              <motion.path
                d="M 85 50 A 35 35 0 0 1 50 85"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="0.8"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.7 }}
              />

              <motion.path
                d="M 50 85 A 35 35 0 0 1 15 50"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="0.8"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.9 }}
              />

              <motion.path
                d="M 15 50 A 35 35 0 0 1 50 15"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="0.8"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 1.1 }}
              />

              {/* Central text */}
              <text
                x="50"
                y="44"
                textAnchor="middle"
                fill="white"
                fontSize="2.2"
                fontWeight="600"
              >
                Threestones
              </text>
              <text
                x="50"
                y="47"
                textAnchor="middle"
                fill="white"
                fontSize="2.2"
                fontWeight="600"
              >
                Company
              </text>
              <text
                x="50"
                y="51"
                textAnchor="middle"
                fill="#E2A037"
                fontSize="1.8"
                fontWeight="500"
              >
                Open Circular
              </text>
              <text
                x="50"
                y="53.5"
                textAnchor="middle"
                fill="#E2A037"
                fontSize="1.8"
                fontWeight="500"
              >
                Regenerative
              </text>
              <text
                x="50"
                y="56"
                textAnchor="middle"
                fill="#E2A037"
                fontSize="1.8"
                fontWeight="500"
              >
                System
              </text>

              {/* Circle nodes */}
              {circlePoints.map((point, index) => (
                <motion.g
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 1.3 + index * 0.2,
                  }}
                >
                  <circle
                    cx={point.position.x}
                    cy={point.position.y}
                    r="9"
                    fill={point.color}
                    stroke="white"
                    strokeWidth="0.3"
                  />
                  <foreignObject
                    x={point.position.x - 8.5}
                    y={point.position.y - 8.5}
                    width="17"
                    height="17"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        textAlign: "center",
                        padding: "2px",
                      }}
                    >
                      <p
                        style={{
                          color: "white",
                          fontSize: "1.5px",
                          lineHeight: "1.4",
                          fontWeight: "600",
                          margin: 0,
                        }}
                      >
                        {point.label}
                      </p>
                    </div>
                  </foreignObject>
                </motion.g>
              ))}
            </svg>
          </div>
        </motion.div>

        {/* Linear Diagram - UN Net Zero */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Linear Diagram Header */}
          <div className="text-center mb-6">
            <h3 className="text-white mb-2">UN Net Zero Approach</h3>
            <p className="text-[var(--gold)]">
              Closed Linear Extraction System
            </p>
          </div>

          <div className="relative w-full" style={{ paddingBottom: "40%" }}>
            <svg
              viewBox="0 0 100 40"
              className="absolute inset-0 w-full h-full"
              style={{
                filter: "drop-shadow(0 0 15px rgba(201, 106, 69, 0.3))",
              }}
            >
              {/* Arrow marker for linear flow */}
              <defs>
                <marker
                  id="linearArrowhead"
                  markerWidth="3"
                  markerHeight="3"
                  refX="2.5"
                  refY="1.5"
                  orient="auto"
                  fill="#EF4444"
                >
                  <polygon points="0 0, 3 1.5, 0 3" />
                </marker>
              </defs>

              {/* Connecting arrows between circles */}
              <motion.line
                x1="21.5"
                y1="20"
                x2="28.5"
                y2="20"
                stroke="#EF4444"
                strokeWidth="0.6"
                markerEnd="url(#linearArrowhead)"
                initial={{
                  strokeDashoffset: 7,
                  strokeDasharray: "7 7",
                }}
                animate={isInView ? { strokeDashoffset: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.5 }}
              />
              <motion.line
                x1="46.5"
                y1="20"
                x2="53.5"
                y2="20"
                stroke="#EF4444"
                strokeWidth="0.6"
                markerEnd="url(#linearArrowhead)"
                initial={{
                  strokeDashoffset: 7,
                  strokeDasharray: "7 7",
                }}
                animate={isInView ? { strokeDashoffset: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.7 }}
              />
              <motion.line
                x1="71.5"
                y1="20"
                x2="78.5"
                y2="20"
                stroke="#EF4444"
                strokeWidth="0.6"
                markerEnd="url(#linearArrowhead)"
                initial={{
                  strokeDashoffset: 7,
                  strokeDasharray: "7 7",
                }}
                animate={isInView ? { strokeDashoffset: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.9 }}
              />

              {/* Circle nodes */}
              {linearPoints.map((point, index) => (
                <motion.g
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 1.3 + index * 0.2,
                  }}
                >
                  <circle
                    cx={point.position.x}
                    cy={point.position.y}
                    r="9"
                    fill={point.color}
                    stroke="white"
                    strokeWidth="0.3"
                  />
                  <foreignObject
                    x={point.position.x - 8.5}
                    y={point.position.y - 8.5}
                    width="17"
                    height="17"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        textAlign: "center",
                        padding: "2px",
                      }}
                    >
                      <p
                        style={{
                          color: "white",
                          fontSize: "1.5px",
                          lineHeight: "1.4",
                          fontWeight: "600",
                          margin: 0,
                        }}
                      >
                        {point.label}
                      </p>
                    </div>
                  </foreignObject>
                </motion.g>
              ))}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
