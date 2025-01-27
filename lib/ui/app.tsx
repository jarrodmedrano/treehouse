import { Menu } from "./menu.tsx";
import { CommandPalette } from "./palette.tsx";
import { Panel as PanelComponent } from "./panel.tsx";
import { QuickAdd } from "./quickadd.tsx";
import { Search } from "./search.tsx";
import { Notice } from "./notices.tsx";

export const App: m.Component = {
  view ({attrs: {workbench}, state}) {
    state.open = (state.open === undefined) ? true : state.open;
    const toggle = (e) => {
      if (state.open) {
        state.open = false;
      } else {
        state.open = true;
      }
    }
    return (
      <main class="workbench m-0 flex flex-row absolute inset-0" style={{overflow: "none"}}>

        <div class="sidebar flex flex-col" style={{width: (state.open)?"256px":"52px"}}>
          <div class="sidebar-top" style={{height: "56px"}}>
            <svg class="logo" width="20" height="20" fill="currentColor" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.8583 13.0223C23.5383 12.7727 23.2143 12.5291 22.8978 12.2755C22.8713 12.254 22.8668 12.1492 22.8913 12.1282C23.1424 11.9101 23.398 11.6974 23.6586 11.4912C24.0255 11.2012 24.3984 10.9182 24.7688 10.6326C24.8656 10.5577 25.0379 10.4878 25.0419 10.4085C25.0469 10.3111 24.9126 10.2063 24.8382 10.105C24.8332 10.0985 24.8277 10.092 24.8227 10.0855C24.6011 9.79096 24.3854 9.49144 24.1548 9.20391C23.9756 8.97976 23.8867 8.98825 23.6641 9.17495C23.2642 9.50991 22.8574 9.83689 22.4525 10.1659C22.1475 10.414 21.846 10.6671 21.532 10.9032C21.3907 11.0095 21.226 11.1463 21.0657 11.1543C20.4862 11.1847 19.9041 11.1658 19.323 11.1668C19.2157 11.1668 19.1633 11.1298 19.2062 11.0165C19.2616 10.8702 19.312 10.722 19.3749 10.5792C19.5562 10.1689 19.7469 9.76351 19.9251 9.35217C20.0678 9.0227 20.1961 8.68674 20.3349 8.35527C20.3599 8.29536 20.3953 8.23246 20.4432 8.19153C20.7173 7.9604 20.9939 7.73127 21.2754 7.50962C21.5065 7.32791 21.7466 7.15819 21.9808 6.97997C22.3267 6.71689 22.6687 6.44833 23.0166 6.18774C23.1589 6.08091 23.1933 5.95312 23.0905 5.81235C23.0041 5.69404 22.9078 5.58321 22.8184 5.4674C22.6292 5.22129 22.4425 4.97419 22.2538 4.72759C22.1675 4.61427 22.0851 4.57084 21.9538 4.68965C21.7786 4.84839 21.5834 4.98517 21.3957 5.12994C21.1761 5.29917 20.9549 5.4664 20.7353 5.63563C20.6314 5.7155 20.5301 5.79837 20.4278 5.87974L20.3798 5.8408C20.3798 5.75044 20.3798 5.66009 20.3798 5.56974C20.3798 4.72309 20.3798 3.87645 20.3798 3.02931C20.3798 2.74976 20.3788 2.74976 20.0893 2.74876C19.9316 2.74876 19.7723 2.76124 19.6166 2.74327C19.5252 2.73279 19.4154 2.69584 19.3555 2.63195C19.2107 2.47869 19.0759 2.31096 18.9651 2.13175C18.8872 2.00545 18.8398 2.0359 18.7624 2.11528C18.724 2.15471 18.6746 2.18367 18.6301 2.21711C18.3476 2.42977 18.0631 2.63944 17.784 2.85659C17.5953 3.00335 17.4146 3.1611 17.2299 3.31335C17.2049 3.29838 17.18 3.2839 17.155 3.26893V0.193359H15.3115C15.2061 0.269238 15.1852 0.376066 15.1862 0.498869C15.1887 0.854798 15.1887 1.21023 15.1862 1.56616C15.1852 1.70194 15.1702 1.83173 15.0474 1.92009C14.7529 2.13325 14.4708 2.36188 14.1883 2.59051C14.06 2.69435 13.9422 2.81266 13.7989 2.89702C13.6626 2.97689 13.5787 2.93746 13.5528 2.78171C13.5393 2.69984 13.5433 2.61647 13.5428 2.5341C13.5423 1.86368 13.5423 1.19375 13.5428 0.52333C13.5428 0.396034 13.5378 0.27373 13.418 0.193359H11.6244C11.5046 0.27373 11.4991 0.396034 11.4996 0.52333C11.5001 1.19375 11.5006 1.86368 11.4996 2.5341C11.4996 2.61697 11.5036 2.69984 11.4896 2.78171C11.4636 2.93746 11.3803 2.97689 11.2435 2.89702C11.1716 2.85509 11.1102 2.79968 11.0463 2.74676C10.7288 2.48219 10.4098 2.21861 10.0754 1.978C9.92211 1.86767 9.85472 1.74587 9.85522 1.56616C9.85622 1.21023 9.85372 0.854299 9.85622 0.498869C9.85722 0.376066 9.83625 0.269238 9.73092 0.193359H7.88738C7.88887 0.708034 7.89536 1.22271 7.88987 1.73738C7.88488 2.25056 7.91633 2.76623 7.86691 3.32134C7.67971 3.19904 7.53444 3.11917 7.40615 3.01783C7.01528 2.70982 6.63139 2.39183 6.24052 2.08333C6.21306 2.06186 6.13069 2.06735 6.10573 2.09231C6.01438 2.18317 5.90755 2.27552 5.85863 2.38934C5.71336 2.72879 5.44629 2.78221 5.1268 2.74876C5.0694 2.74277 5.01049 2.74776 4.95258 2.74776C4.66405 2.74876 4.66305 2.74876 4.66305 3.02881C4.66255 3.88394 4.66305 4.73907 4.66205 5.5937C4.66205 5.67956 4.65306 5.76542 4.64458 5.91818C4.43342 5.74495 4.27267 5.61217 4.11044 5.48088C3.84536 5.26622 3.5713 5.06155 3.31621 4.83541C3.01419 4.56784 2.90137 4.56185 2.70719 4.81994C2.49203 5.10598 2.2654 5.38353 2.03726 5.65959C1.85106 5.88473 1.8281 6.0255 1.98984 6.1513C2.27588 6.37295 2.56991 6.58411 2.85844 6.80226C3.04115 6.94004 3.22236 7.07981 3.40157 7.22258C3.62372 7.3998 3.84686 7.57552 4.06151 7.76122C4.28266 7.95291 4.55073 8.12114 4.6965 8.36126C4.93112 8.74764 5.08887 9.18194 5.26658 9.60177C5.45178 10.0396 5.62451 10.4824 5.79823 10.9251C5.89108 11.1613 5.88609 11.1658 5.62101 11.1668C5.14777 11.1683 4.67353 11.1498 4.20179 11.1732C3.88779 11.1887 3.67264 11.0325 3.45399 10.8558C3.24482 10.687 3.03716 10.5153 2.82749 10.3466C2.35076 9.96169 1.86703 9.58479 1.39829 9.18993C1.16466 8.99324 1.06183 8.97927 0.867138 9.21738C0.582095 9.56582 0.301545 9.91776 0.029981 10.2762C-0.000470201 10.3166 0.0140066 10.4439 0.0524449 10.4759C0.426345 10.7844 0.808732 11.0829 1.19112 11.3814C1.51061 11.631 1.83509 11.8746 2.15158 12.1282C2.17554 12.1477 2.17254 12.252 2.14609 12.2755C1.89499 12.4931 1.6394 12.7063 1.37882 12.9125C1.01191 13.2025 0.639004 13.485 0.269097 13.7711C0.172752 13.8455 0.0214946 13.9084 -0.000470201 14.0007C-0.0179422 14.0741 0.123331 14.1854 0.194218 14.2798C0.204201 14.2932 0.214185 14.3062 0.224169 14.3197C0.446812 14.6137 0.662966 14.9127 0.893596 15.2003C1.07081 15.4214 1.15967 15.4095 1.38481 15.2193C1.77668 14.8878 2.17754 14.5663 2.5764 14.2423C2.8879 13.9892 3.1969 13.7326 3.51639 13.4895C3.71058 13.3413 3.90826 13.2175 4.18432 13.2245C4.96407 13.2444 5.74531 13.2479 6.52506 13.223C6.82358 13.2135 7.05122 13.3178 7.27186 13.4815C7.4356 13.6033 7.59185 13.7361 7.75259 13.8624C8.26128 14.2623 8.77695 14.6537 9.27565 15.066C9.42291 15.1878 9.56119 15.3495 9.63757 15.5223C9.96105 16.2556 10.2586 17.0004 10.5686 17.7397C10.628 17.882 10.7218 18.0128 10.7618 18.1595C10.8711 18.5599 11.1137 18.9028 11.1032 19.3601C11.0688 20.9031 11.0917 22.4477 11.0877 23.9917C11.0877 24.1419 11.1347 24.1944 11.2874 24.1934C12.1091 24.1879 12.9313 24.1879 13.753 24.1934C13.9042 24.1944 13.9576 24.1444 13.9531 23.9927C13.9037 22.3743 14.045 20.7529 13.8803 19.136C13.8783 19.1155 13.8952 19.0925 13.9042 19.0711C14.0974 18.6203 14.2921 18.17 14.4833 17.7182C14.5412 17.582 14.5841 17.4392 14.642 17.3029C14.8462 16.8227 15.0619 16.3479 15.2566 15.8637C15.3774 15.5632 15.5116 15.2692 15.7637 15.065C16.1965 14.7151 16.6533 14.3941 17.0936 14.0526C17.3003 13.8924 17.483 13.7017 17.6912 13.5439C17.9178 13.3717 18.1399 13.212 18.4654 13.2225C19.2616 13.2474 20.0594 13.2414 20.8561 13.2255C21.1581 13.2195 21.3702 13.3622 21.5804 13.537C21.7816 13.7037 21.9788 13.8749 22.1824 14.0386C22.6727 14.433 23.1699 14.8184 23.6546 15.2188C23.8912 15.4139 23.9701 15.4249 24.1663 15.1853C24.4568 14.8309 24.7423 14.4725 25.0199 14.108C25.0473 14.0721 25.0314 13.9553 24.9954 13.9258C24.6205 13.6183 24.2376 13.3198 23.8553 13.0218L23.8583 13.0223ZM9.49979 12.0394C9.49979 12.1287 9.49979 12.2176 9.49979 12.3069C9.47633 12.3189 9.45237 12.3304 9.4289 12.3424C9.1219 12.0903 8.83386 11.8082 8.50239 11.5936C8.04363 11.2965 7.95427 10.8078 7.76707 10.3635C7.53494 9.81393 7.29233 9.2688 7.05821 8.72018C6.87849 8.29836 6.70427 7.87454 6.53055 7.45022C6.50609 7.39081 6.48612 7.32392 6.48562 7.26052C6.48313 6.43035 6.48413 5.60069 6.48562 4.77052C6.48562 4.73957 6.49811 4.70862 6.51308 4.63973C6.63688 4.7191 6.7492 4.78 6.84904 4.85688C7.11312 5.06005 7.36521 5.2797 7.63528 5.47539C7.95028 5.70352 8.04163 6.05895 8.1859 6.38443C8.41353 6.8986 8.63717 7.41528 8.85283 7.93444C9.07297 8.46409 9.29013 8.99524 9.4903 9.53238C9.53324 9.64769 9.49879 9.79146 9.49879 9.92225C9.49879 10.6276 9.49879 11.333 9.49879 12.0389L9.49979 12.0394ZM11.2105 5.80486C11.0892 6.14232 10.936 6.46829 10.7902 6.79627C10.7598 6.86516 10.7074 6.92406 10.6455 7.01641C10.4448 6.54417 10.2611 6.10987 10.0759 5.67606C9.98701 5.4674 9.8707 5.26622 9.81179 5.04957C9.7444 4.80296 9.72693 4.54288 9.68799 4.28829C9.71494 4.27681 9.7419 4.26533 9.76836 4.25385C9.98801 4.41259 10.2121 4.56535 10.4258 4.73158C10.6964 4.94174 10.958 5.16289 11.2235 5.37904C11.4022 5.52431 11.2565 5.67706 11.2105 5.80386V5.80486ZM13.0541 14.6532C12.8334 15.0051 12.7281 15.4289 12.5714 15.8208L12.482 15.8138C12.3352 15.4684 12.1905 15.1224 12.0412 14.7785C11.9963 14.6751 11.9284 14.5808 11.8925 14.4749C11.8405 14.3217 11.7731 14.162 11.7721 14.0047C11.7627 12.587 11.7652 11.1693 11.7687 9.75153C11.7687 9.65568 11.7876 9.55285 11.8256 9.46549C12.0108 9.03967 12.2064 8.61834 12.3966 8.19452C12.4331 8.11365 12.4615 8.02929 12.5174 7.88552C12.6647 8.2075 12.792 8.48156 12.9153 8.75712C13.0082 8.96479 13.1045 9.17196 13.1834 9.38511C13.2308 9.51341 13.2752 9.65269 13.2762 9.78697C13.2832 10.989 13.2817 12.1916 13.2792 13.3937C13.2782 13.825 13.3102 14.2448 13.0541 14.6532ZM15.0933 5.42896C15.0554 5.50833 15.008 5.58371 14.9735 5.66408C14.7883 6.09889 14.6056 6.53469 14.4224 6.96999C14.3979 6.97848 14.3735 6.98696 14.349 6.99545C14.2746 6.81823 14.2007 6.64102 14.1264 6.4638C14.0096 6.18625 13.8853 5.91119 13.7809 5.62864C13.7565 5.56175 13.7704 5.43295 13.8179 5.39402C14.1319 5.13493 14.4608 4.89482 14.7818 4.64372C14.9451 4.51593 15.1013 4.37914 15.2885 4.22389C15.4003 4.69015 15.2675 5.06305 15.0933 5.42846V5.42896ZM18.1569 8.30634C17.9098 8.76611 17.763 9.27878 17.5609 9.76301C17.3472 10.2742 17.1405 10.7899 16.8894 11.2826C16.7996 11.4588 16.5964 11.5831 16.4312 11.7139C16.1626 11.926 15.8831 12.1242 15.5785 12.3504C15.5651 12.2615 15.5481 12.2021 15.5476 12.1427C15.5381 11.3135 15.5027 10.4834 15.5371 9.65618C15.5496 9.35816 15.7273 9.06563 15.8376 8.77409C15.892 8.63033 15.9704 8.49554 16.0298 8.35327C16.3538 7.57552 16.6643 6.79227 17.0043 6.02151C17.1136 5.77341 17.2613 5.54228 17.5319 5.39801C17.7655 5.27371 17.9577 5.07054 18.1679 4.90231C18.2747 4.81694 18.381 4.73108 18.5458 4.59929C18.5538 4.75704 18.5613 4.83641 18.5618 4.91628C18.5628 5.34809 18.5418 5.7804 18.5667 6.21071C18.6097 6.94753 18.5148 7.63991 18.1569 8.30634Z" />
            </svg>
          </div>
          <div class="grow sidebar-main">
            {state.open && workbench.workspace.bus.root().children.map(node => <NavNode node={node} expanded={true} level={0} workbench={workbench} />)}
          </div>
          <div class="sidebar-bottom">
            <svg onclick={toggle} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sidebar"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
          </div>
        </div>

        <div class="main flex flex-col grow">
          <div class="topbar flex">
            <div class="topbar-item" onclick={() => workbench.openToday()} style={{cursor: "pointer", marginLeft: "var(--padding)", marginRight: "var(--padding)", display: "flex", alignItems: "center"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                {/* <text text-anchor="middle" x="8" y="13" style={{fontSize: "0.55rem"}}>{(new Date()).getDate()}</text> */}
              </svg>
              <div>Today</div>
            </div>
            <div class="topbar-item" onclick={() => workbench.openQuickAdd()} style={{cursor: "pointer", marginLeft: "var(--padding)", marginRight: "var(--padding)", display: "flex", alignItems: "center"}}>
              <svg style={{marginRight: "var(--1)"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              <div>Quick Add</div>
            </div>

            <div class="searchbar flex grow">
              <div>
                <div class="flex" style={{margin: "1px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search shrink-0"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  <input type="text" placeholder="Search" 
                    onkeydown={(e) => {
                      if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) return;
                      const input = e.target.getBoundingClientRect();
                      workbench.showDialog(() => <Search workbench={workbench} input={e.key} />, false, {
                        // TODO: make these not so hardcoded offsets
                        left: `${input.left-33}px`,
                        top: `${input.top-9}px`,
                        width: `${input.width+33}px`
                      });
                      e.preventDefault();
                    }} 
                    style={{
                      border: "0", 
                      outline: "0", 
                      background: "transparent", 
                      paddingTop: "3px"
                    }} />
                </div>
              </div>
            </div>
            
            <div onclick={(e) => workbench.showMenu(e)} data-menu="settings" data-align="right" style={{cursor: "pointer", marginLeft: "var(--padding)", marginRight: "var(--padding)"}}>
              <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </div>
          </div>

          <div class="panels flex flex-row grow" style={{position: "relative", overflow: "hidden"}}>
            {workbench.panels.map(path => <div><PanelComponent workbench={workbench} path={path} /></div>)}
          </div>

          <div class="mobile-nav flex-row">
            <div>
              <svg onclick={() => {
                const sidebarStyle = document.querySelector(".sidebar").style;
                if (sidebarStyle.display !== "flex") {
                  sidebarStyle.display = "flex";
                } else {
                  sidebarStyle.display = "none";
                }
              }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sidebar"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
            </div>
            <div onclick={() => workbench.openToday()}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div onclick={() => workbench.openQuickAdd()}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            </div>
            <div onclick={() => workbench.showDialog(() => <Search workbench={workbench} />, true, {top: "25%", bottom: "100px"})}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search shrink-0"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <div onclick={(e) => workbench.showMenu(e, undefined, {bottom: "100px", marginTop: "auto"})} data-menu="settings">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </div>
          </div>
        </div>

        
        
        <dialog 
          class={(workbench.dialog.backdrop) ? "modal backdrop" : "modal"} 
          style={(workbench.dialog.style) ? {margin: "0", ...workbench.dialog.style} : {top: "-50%"}}
          oncancel={e => {
            if (workbench.dialog.explicitClose === true) {
              e.preventDefault();
              return;
            }
            // resets body
            workbench.dialog.body = () => null;
          }}
          onclick={e => {
            const dialog = e.target.closest("dialog");
            const rect = dialog.getBoundingClientRect();
            if ((workbench.dialog.explicitClose !== true) && (
              e.clientX < rect.left ||
              e.clientX > rect.right ||
              e.clientY < rect.top ||
              e.clientY > rect.bottom
            )) {
              workbench.closeDialog();
            }
          }}>
            {workbench.dialog.body()}
        </dialog>

        <dialog class="menu" 
          style={{margin: "0", ...workbench.menu.style}}
          oncancel={e => {
            // resets body
            workbench.menu.body = () => null;
          }}
          onclick={e => {
            const dialog = e.target.closest("dialog");
            const rect = dialog.getBoundingClientRect();
            if (e.clientX < rect.left ||
              e.clientX > rect.right ||
              e.clientY < rect.top ||
              e.clientY > rect.bottom
            ) {
              workbench.closeMenu();
            }
          }}>
            {workbench.menu.body()}
        </dialog>
      </main>
    )
  }
};

const NavNode: m.Component = {
  view ({attrs: {node, workbench, expanded, level}, state}) {
    state.expanded = (state.expanded === undefined) ? expanded : state.expanded;
    const expandable = (node.childCount > 0 && level < 3);
    const toggle = (e) => {
      if (!expandable) return;
      if (state.expanded) {
        state.expanded = false;
      } else {
        state.expanded = true;
      }
      e.stopPropagation();
    }
    const open = (e) => {
      const mobileNav = document.querySelector(".mobile-nav");
      if (mobileNav.offsetHeight) {
        document.querySelector(".sidebar").style.display = "none";
      }
      workbench.open(node);
    }
    return (
      <div>
        <div class="sidebar-item flex">
          <svg onclick={toggle} class="feather feather-chevron-right shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">          
            {(expandable)
                ?(state.expanded)
                  ? <polyline points="6 9 12 15 18 9"></polyline>
                  : <polyline points="9 18 15 12 9 6"></polyline>
              :null}
          </svg>
          
          <div class="sidebar-item-label grow" onclick={open} style={{cursor: "pointer", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
            {node.name}
          </div>
        </div>
        {state.expanded && 
          <div class="sidebar-item-nested">
            {node.children.filter(n => n.name !== "").map(n => <NavNode workbench={workbench} node={n} level={level+1} />)}
          </div>
        }
      </div>
    )
  }
};
