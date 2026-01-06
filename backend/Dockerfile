FROM node:20
WORKDIR /app

# Copy & install backend deps
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Copy & build frontend
COPY frontend/package*.json ./frontend/
COPY frontend/ ./frontend/
RUN cd frontend && npm install && npm run build

# Copy backend code
COPY backend/ ./backend/
WORKDIR /app/backend

EXPOSE $PORT
CMD ["npm", "start"]
