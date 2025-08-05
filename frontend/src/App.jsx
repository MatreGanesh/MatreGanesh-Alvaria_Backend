import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StateProvider } from "./StateContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Page1 from "./components/Page1";
import SecurityProfile from "./pages/Administration/SecurityProfile";
import Users from "./pages/Administration/Users";
import HolidayFactors from "./pages/Forecasting/HolidayFactors";
import EmployeeInformation from "./pages/Employees/EmployeeInformation";
import Employees from "./pages/Employees";
import EmployeeDataCenter from "./pages/Employees/EmployeeDataCenter";
import MonthlyPatternUpdates from "./pages/Forecasting/MonthlyPatternUpdates";
import Calender from "./pages/Calender";
import DailyAhtSets from "./pages/Forecasting/DailyAhtSets";
import DailyAHT from "./pages/Popup/DailyAHT";
import ForcastingScenario from "./pages/Forecasting/ForcastingScenario";
import ForcastingScenarioVolume from "./pages/Popup/ForcastingScenarioVolume";
import AutoRunManager from "./pages/Administration/AutoRunManager";
import OfficialSchedulEditor from "./pages/Tracking/OfficialSchedulEditor";
import TrackingEdit from "./pages/Popup/TrackingEdit";
import TrackingEditSegment from "./pages/Popup/TrackingEditSegment";
import TrackingEditDays from "./pages/Tracking/PopUp/TrackingEditDays";
import TrackingEditMonths from "./pages/Tracking/PopUp/TrackingEditMonths";
import TrackingEditWeek from "./pages/Tracking/PopUp/TrackingEditWeek";
import IntraDayPerformenceDetails from "./pages/Tracking/PopUp/IntraDayPerformenceDetails";
import ViewIntraDayPerformance from "./pages/Tracking/ViewIntraDayPerformance";
import TimeZone from "./common/TimeZone";
import IntraDayPerformance from "./pages/Tracking/IntraDayPerformance";
import Login from "./Login_Logout/Login";
import Register from "./Login_Logout/Register";
import FiscalVolumes from "./pages/Forecasting/PopUp/FiscalVolumes";
import FiscalPeriods from "./pages/Forecasting/PopUp/FiscalPeriods";
import GeneralMonthlyPattern from "./pages/Forecasting/PopUp/GeneralMonthlyPattern";
import MultidimensionalIntraDay from "./pages/Tracking/MultidimensionalIntraDay";
import DailySets from "./pages/Tracking/PopUp/DailySets";
import DailySetsPerformence from "./pages/Tracking/PopUp/DailySetsPerformence";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex gap-1 m-0.5">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}

function App() {
  return (
    <StateProvider>
      <Router>
        <Routes>
          <Route
            path="/home"
            element={
              <Layout>
                <Page1 />
              </Layout>
            }
          />

          <Route
            path="/administration-security-profile"
            element={
              <Layout>
                <SecurityProfile />
              </Layout>
            }
          />

          <Route
            path="/administration-users"
            element={
              <Layout>
                <Users />
              </Layout>
            }
          />

          <Route
            path="/employeese-employee-information"
            element={
              <Layout>
                <EmployeeInformation />
              </Layout>
            }
          />

          <Route
            path="/employeese-employee"
            element={
              <Layout>
                <Employees />
              </Layout>
            }
          />

          <Route
            path="/employee-data-center"
            element={
              <Layout>
                <EmployeeDataCenter />
              </Layout>
            }
          />

          <Route
            path="/forecasting-holiday-factors"
            element={
              <Layout>
                <HolidayFactors />
              </Layout>
            }
          />

          <Route
            path="/forecasting-monthly-pattern-updates"
            element={
              <Layout>
                <MonthlyPatternUpdates />
              </Layout>
            }
          />

          <Route
            path="/calender-Daily-Values"
            element={
              <Layout>
                <Calender />
              </Layout>
            }
          />

          <Route
            path="/forecasting-daily-aht-sets"
            element={
              <Layout>
                <DailyAhtSets />
              </Layout>
            }
          />

          <Route
            path="/forecasting-daily-aht"
            element={
              <Layout>
                <DailyAHT />
              </Layout>
            }
          />

          <Route
            path="/forecasting-forcasting-scenario"
            element={
              <Layout>
                <ForcastingScenario />
              </Layout>
            }
          />

          <Route
            path="/forecasting-forcasting-volume"
            element={
              <Layout>
                <ForcastingScenarioVolume />
              </Layout>
            }
          />

          <Route
            path="/administration-auto-run-manager"
            element={
              <Layout>
                <AutoRunManager />
              </Layout>
            }
          />

          <Route
            path="/tracking-official-schedul-editor"
            element={
              <Layout>
                <OfficialSchedulEditor />
              </Layout>
            }
          />

          <Route
            path="/official-tracking-edit"
            element={
              <Layout>
                <TrackingEdit />
              </Layout>
            }
          />

          <Route
            path="/official-tracking-edit-Segment"
            element={
              <Layout>
                <TrackingEditSegment />
              </Layout>
            }
          />

          <Route
            path="/official-tracking-edit-days"
            element={
              <Layout>
                <TrackingEditDays />
              </Layout>
            }
          />

          <Route
            path="/official-tracking-edit-Week"
            element={
              <Layout>
                <TrackingEditWeek />
              </Layout>
            }
          />

          <Route
            path="/official-tracking-edit-months"
            element={
              <Layout>
                <TrackingEditMonths />
              </Layout>
            }
          />
          <Route
            path="/intra-day-performance-details"
            element={
              <Layout>
                <IntraDayPerformenceDetails />
              </Layout>
            }
          />
          <Route
            path="/view-intra-day-performance"
            element={
              <Layout>
                <ViewIntraDayPerformance />
              </Layout>
            }
          />
          <Route
            path="/tracking/Intra_Day_Performance"
            element={
              <Layout>
                <IntraDayPerformance />
              </Layout>
            }
          />
          <Route
            path="/tracking/Multidimensional_Intra_Day_Performance"
            element={
              <Layout>
                <MultidimensionalIntraDay />
              </Layout>
            }
          />
          <Route
            path="/tracking/Multidimensional_Intra_Day_Performance/Daily_Sets"
            element={
              <Layout>
                <DailySets />
              </Layout>
            }
          />
          <Route
            path="/tracking/Multidimensional_Intra_Day_Performance/Daily_Sets/Performence"
            element={
              <DailySetsPerformence />
            }
          />

          <Route
            path="/timeZone"
            element={
              <>
                <Navbar />
                <TimeZone />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Login />
              </>
            }
          />

          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />

          <Route
            path="/forecasting-forcasting-scenario/Fiscal_Volumes"
            element={
              <>
                <Navbar />
                <FiscalVolumes />
              </>
            }
          />

          <Route
            path="/forecasting-forcasting-scenario/Fiscal_Volumes/Fiscal_Periods"
            element={
              <>
                {/* <Navbar /> */}
                <FiscalPeriods />
              </>
            }
          />

          <Route
            path="/forecasting/Monthly-Pattern-Updates/General"
            element={
              <>
                <Navbar />
                <GeneralMonthlyPattern />
              </>
            }
          />

        </Routes>
      </Router>
    </StateProvider >
  );
}

export default App;
