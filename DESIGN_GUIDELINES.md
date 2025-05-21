# Design Guidelines

{
  "designGuidelines": {
    "colorSystem": {
      "primary": "#6200EE",
      "secondary": "#03DAC6",
      "accent": "#03DAC5",
      "success": "#4CAF50",
      "error": "#B00020",
      "warning": "#FB8C00",
      "background": "#FFFFFF",
      "surface": "#F5F5F5",
      "textColors": {
        "primaryText": "#212121",
        "secondaryText": "#757575",
        "disabledText": "#9E9E9E"
      }
    },
    "typography": {
      "fontFamilies": {
        "primary": "Roboto, sans-serif",
        "secondary": "Arial, sans-serif"
      },
      "fontSizes": {
        "heading1": "24px",
        "heading2": "20px",
        "body": "16px",
        "caption": "12px"
      },
      "lineHeights": {
        "heading1": "32px",
        "body": "24px"
      },
      "fontWeights": {
        "normal": "400",
        "medium": "500",
        "bold": "700"
      }
    },
    "spacing": {
      "marginAndPadding": {
        "xxs": "4px",
        "xs": "8px",
        "s": "12px",
        "m": "16px",
        "l": "24px",
        "xl": "32px"
      },
      "gridSystem": "12-column",
      "componentSpacing": "8px"
    },
    "components": {
      "buttonStyles": {
        "primaryButton": {
          "backgroundColor": "#6200EE",
          "color": "#FFFFFF",
          "padding": "12px 24px"
        },
        "secondaryButton": {
          "backgroundColor": "transparent",
          "border": "1px solid #6200EE",
          "color": "#6200EE",
          "padding": "11px 23px"
        }
      },
      "inputStyles": {
        "border": "1px solid #757575",
        "focusBorderColor": "#6200EE"
      },
      "cardStyles": {
        "backgroundColor": "#FFFFFF",
        "shadow": "0 2px 4px rgba(0,0,0,0.1)",
        "padding": "16px"
      },
      "formStyles": {
        "labelColor": "#757575",
        "errorMessageColor": "#B00020"
      },
      "navigationStyles": {
        "backgroundColor": "#6200EE",
        "color": "#FFFFFF",
        "hoverBackgroundColor": "#3700B3"
      }
    },
    "animations": {
      "transitions": "all 0.3s ease",
      "hoverEffects": {
        "buttonHover": {
          "backgroundColor": "#3700B3"
        }
      },
      "loadingStates": {
        "spinnerColor": "#6200EE"
      },
      "pageTransitions": "opacity 0.4s ease-in-out"
    },
    "responsiveDesign": {
      "breakpoints": {
        "small": "600px",
        "medium": "960px",
        "large": "1280px",
        "extraLarge": "1920px"
      },
      "mobile-firstApproach": true,
      "gridSystem": "fluid",
      "componentAdaptations": {
        "buttons": {
          "padding": "8px 16px"
        },
        "fontSizes": {
          "heading1": "20px",
          "body": "14px"
        }
      }
    },
    "pageSpecific": {
      "loginPage": {
        "formAlignmentCenter": true,
        "primaryAction": "Log in",
        "secondaryAction": "Register"
      },
      "productDetailsPage": {
        "gallery": true,
        "addToCartButton": true,
        "descriptionSection": true
      },
      "myPage": {
        "userProfileSection": true,
        "orderHistorySection": true,
        "settingsSection": true
      }
    }
  }
}