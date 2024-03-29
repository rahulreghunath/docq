let ENV = {};
const PRD = {
  MAP_API_KEY: 'AIzaSyBMfwS9dLTDJNCUqkhhVpDTHra_zjZYEvo',
  ADMIN: {
    END_POINT: 'http://docq.gridenttech.com/api/admin',
  },
  DOCTOR: {
    END_POINT: 'http://docq.gridenttech.com/api/doctor',
  }
};
const DEV = {
  MAP_API_KEY: 'AIzaSyB7OhVqq6IRp6By8d973L916aQmNBvshB0',
  ADMIN: {
    END_POINT: 'http://localhost:8000/api/admin',
  },
  DOCTOR: {
    END_POINT: 'http://localhost:8000/api/doctor',
  }
};
if (process.env.NODE_ENV === 'production') {
  ENV = PRD;
} else {
  ENV = DEV;
}
export {
  ENV
};