package com.sellapp;
import android.widget.LinearLayout;
import android.graphics.Color;
import android.widget.TextView;
import android.view.Gravity;
import android.util.TypedValue;

// import com.facebook.react.ReactActivity;

// public class MainActivity extends ReactActivity {

//     /**
//      * Returns the name of the main component registered from JavaScript.
//      * This is used to schedule rendering of the component.
//      */
//     @Override
//     protected String getMainComponentName() {
//         return "SellApp";
//     }
// }

import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity  {
    @Override
    public LinearLayout createSplashLayout() {
      LinearLayout view = new LinearLayout(this);
      TextView textView = new TextView(this);

      view.setBackgroundColor(Color.parseColor("#00ADA9"));
      view.setGravity(Gravity.CENTER);

      textView.setTextColor(Color.parseColor("white"));
      textView.setText("Sell it");
      textView.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 40);

      view.addView(textView);
      return view;
    }
}
